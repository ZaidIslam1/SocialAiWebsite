import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Create engaging</span>
            <span className="block text-indigo-200">social media content with AI</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-indigo-100">
            SocialAI Studio helps you generate high-quality social media posts, images, and more in seconds. Save time and boost your online presence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/auth/signup" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Get started for free
            </Link>
            <Link href="/features" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
