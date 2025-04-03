'use client';

import { useState } from 'react';

export default function ContentGenerator() {
  const [platform, setPlatform] = useState('twitter');
  const [contentType, setContentType] = useState('text');
  const [tone, setTone] = useState('professional');
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    // In a real implementation, this would call an API
    setTimeout(() => {
      setIsGenerating(false);
      // The parent component will handle the generated content
      if (typeof window !== 'undefined') {
        const event = new CustomEvent('contentGenerated', {
          detail: generateSampleContent(platform, tone, topic)
        });
        window.dispatchEvent(event);
      }
    }, 1500);
  };
  
  const generateSampleContent = (platform: string, tone: string, topic: string) => {
    if (platform === 'twitter') {
      if (tone === 'professional') {
        return `Just published a new article on ${topic}. Check out the key insights that can help you improve your strategy. #${topic.replace(/\s+/g, '')} #ProfessionalDevelopment`;
      } else if (tone === 'casual') {
        return `Hey everyone! Been thinking about ${topic} lately and wanted to share some thoughts! What's your take? #${topic.replace(/\s+/g, '')} #JustSaying`;
      } else {
        return `I'm SO excited to talk about ${topic}! This is absolutely game-changing and you need to know about it! 🔥 #${topic.replace(/\s+/g, '')} #MustRead`;
      }
    } else if (platform === 'instagram') {
      return `✨ ${topic.toUpperCase()} ✨\n\nHave you been wondering about ${topic}? Here are my thoughts...\n\nDouble tap if you agree and leave your opinion in the comments below! 👇\n\n#${topic.replace(/\s+/g, '')} #InstaThoughts #ShareYourPerspective`;
    } else if (platform === 'linkedin') {
      return `I've been researching ${topic} extensively, and I'm excited to share my professional insights on this important topic.\n\nIn today's rapidly evolving landscape, understanding ${topic} can provide a significant competitive advantage.\n\nWhat are your experiences with ${topic}? I'd love to hear your thoughts in the comments.\n\n#${topic.replace(/\s+/g, '')} #ProfessionalDevelopment #IndustryInsights`;
    } else {
      return `Check out my thoughts on ${topic}! I'd love to hear what you think about this topic too. Share your experiences in the comments below!`;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Generate Content</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
            Platform
          </label>
          <select
            id="platform"
            name="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="twitter">Twitter/X</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="content-type" className="block text-sm font-medium text-gray-700">
            Content Type
          </label>
          <select
            id="content-type"
            name="content-type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="text">Text Post</option>
            <option value="image">Image Post</option>
            <option value="carousel">Carousel</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
            Tone
          </label>
          <select
            id="tone"
            name="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="enthusiastic">Enthusiastic</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Topic
          </label>
          <input
            type="text"
            name="topic"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., digital marketing, coffee brewing, remote work"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={!topic || isGenerating}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              !topic || isGenerating ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isGenerating ? 'Generating...' : 'Generate Content'}
          </button>
        </div>
      </div>
    </div>
  );
}
