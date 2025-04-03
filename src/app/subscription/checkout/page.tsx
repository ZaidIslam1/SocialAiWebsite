'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [plan, setPlan] = useState('');
  const [billing, setBilling] = useState('');
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get('plan');
    const billingParam = searchParams.get('billing');

    if (planParam) {
      setPlan(planParam);

      // Set price based on plan
      if (planParam === 'creator') {
        setPrice(24.99);
      } else if (planParam === 'pro') {
        setPrice(39.99);
      }
    }

    if (billingParam) {
      setBilling(billingParam);

      // Apply 20% discount for annual billing
      if (billingParam === 'annual') {
        setPrice(prev => +(prev * 0.8).toFixed(2));
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/subscription/success';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
                    </p>
                    <p className="text-sm text-gray-500">
                      {billing === 'annual' ? 'Annual billing (20% discount)' : 'Monthly billing'}
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">${price}/mo</p>
                </div>
                {billing === 'annual' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-md">
                    <p className="text-sm text-green-700">
                      You're saving 20% with annual billing!
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="card-name"
                      name="card-name"
                      placeholder="John Smith"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                        Expiration
                      </label>
                      <input
                        type="text"
                        id="expiration"
                        name="expiration"
                        placeholder="MM/YY"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {loading
                      ? 'Processing...'
                      : `Pay $${billing === 'annual' ? (price * 12).toFixed(2) : price}`}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    By subscribing, you agree to our{' '}
                    <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
