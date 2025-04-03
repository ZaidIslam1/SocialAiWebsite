'use client';

import { useState, useEffect } from 'react';

export default function ContentResult() {
  const [generatedContent, setGeneratedContent] = useState('');
  const [platform, setPlatform] = useState('twitter');

  useEffect(() => {
    const handleContentGenerated = (event: any) => {
      setGeneratedContent(event.detail);
      // Extract platform from the content (in a real app, this would be passed directly)
      if (event.detail.includes('#InstaThoughts')) {
        setPlatform('instagram');
      } else if (event.detail.includes('#ProfessionalDevelopment #IndustryInsights')) {
        setPlatform('linkedin');
      } else {
        setPlatform('twitter');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('contentGenerated', handleContentGenerated);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('contentGenerated', handleContentGenerated);
      }
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('Content copied to clipboard!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Generated Content</h2>
      {generatedContent ? (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                {platform === 'twitter' ? 'T' : platform === 'instagram' ? 'I' : 'L'}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{platform.charAt(0).toUpperCase() + platform.slice(1)} Post</p>
                <p className="text-xs text-gray-500">Generated with AI</p>
              </div>
            </div>
            <p className="text-gray-800 whitespace-pre-line">{generatedContent}</p>
          </div>
          
          <div className="flex space-x-3">
            <button
              type="button"
              className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
            <button
              type="button"
              className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Copy
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No content generated</h3>
          <p className="mt-1 text-sm text-gray-500">Fill in the form and click generate to create content.</p>
        </div>
      )}
    </div>
  );
}
