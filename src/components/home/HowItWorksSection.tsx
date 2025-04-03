export default function HowItWorksSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">How It Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Create content in three simple steps</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-md bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Select your platform</h3>
              <p className="mt-2 text-base text-gray-500">Choose from Twitter/X, Instagram, LinkedIn, or Facebook to optimize your content.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-md bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Describe your content</h3>
              <p className="mt-2 text-base text-gray-500">Provide a brief description of what you want to post about.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-md bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Generate & customize</h3>
              <p className="mt-2 text-base text-gray-500">Get AI-generated content instantly and customize it to match your brand voice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
