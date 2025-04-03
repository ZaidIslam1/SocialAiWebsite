import { Suspense } from 'react';
import CheckoutPage from './CheckoutComponent';

export default function CheckoutWrapper() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
