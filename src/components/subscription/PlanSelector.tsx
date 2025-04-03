'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    description: 'Perfect for trying out SocialAI Studio.',
    features: [
      '5 generations per month',
      'Basic text generation',
      'Community support',
      'Twitter/X and Facebook support'
    ],
    popular: false
  },
  {
    id: 'creator',
    name: 'Creator',
    price: 24.99,
    description: 'Everything you need for consistent content.',
    features: [
      '100 generations per month',
      'Advanced text generation',
      'Basic image generation',
      'All social platforms',
      'Email support'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 39.99,
    description: 'For power users and professionals.',
    features: [
      '250 generations per month',
      'Advanced text & image generation',
      'Analytics & performance tracking',
      'All social platforms',
      'Priority support'
    ],
    popular: false
  }
];

export default function PlanSelector() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const discount = 0.2; // 20% discount for annual billing

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-center">Subscription Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Choose the plan that fits your content creation needs
          </p>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={`${
                billingCycle === 'monthly' ? 'bg-white border-gray-200 shadow-sm' : 'border border-transparent'
              } relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`${
                billingCycle === 'annual' ? 'bg-white border-gray-200 shadow-sm' : 'border border-transparent'
              } ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className={`bg-white border ${plan.popular ? 'border-2 border-indigo-500' : 'border-gray-200'} rounded-lg shadow-sm p-6 relative`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 mr-4 bg-indigo-500 rounded-full px-3 py-1 text-xs font-semibold text-white tracking-wide uppercase">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${billingCycle === 'annual' ? (plan.price * (1 - discount)).toFixed(2) : plan.price}
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              {billingCycle === 'annual' && plan.price > 0 && (
                <p className="mt-1 text-sm text-green-600">Save 20% with annual billing</p>
              )}
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href={plan.id === 'free' ? '/auth/signup' : `/subscription/checkout?plan=${plan.id}&billing=${billingCycle}`}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {plan.id === 'free' ? 'Sign up for free' : 'Start your trial'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
