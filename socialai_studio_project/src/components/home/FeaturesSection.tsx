export default function FeaturesSection() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Features</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Everything you need to create amazing content</p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">AI Content Generator</h3>
              <p className="mt-3 text-lg text-gray-500">
                Our advanced AI understands your brand voice and creates engaging posts optimized for each platform.
              </p>
              <div className="mt-10 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Platform-specific formatting</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Customizable tone and style</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Hashtag recommendations</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 bg-gray-100 rounded-lg p-6">
              <div className="bg-white rounded shadow p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">T</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Twitter Post</p>
                    <p className="text-xs text-gray-500">Generated with AI</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-gray-800">Just tried the new coffee blend from @LocalCafe and it's a game-changer! The perfect balance of bold flavor and smooth finish. ☕️ #CoffeeLovers #MorningBoost</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mt-10 lg:mt-0 order-first lg:order-last">
                <h3 className="text-2xl font-extrabold text-gray-900">Visual Content Creator</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Create eye-catching images and graphics for your social media posts without design skills.
                </p>
                <div className="mt-10 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-500">AI-generated images</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Custom templates</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Quick resizing for different platforms</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 order-last lg:order-first">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-white text-xl font-bold">AI-Generated Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
