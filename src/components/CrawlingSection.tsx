import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface CrawledPost {
  id: number;
  profileImage: string;
  authorName: string;
  title: string;
}

const CrawlingSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'blog' | 'cafe'>('blog');

  const healingBlogs: CrawledPost[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    authorName: `Blogger ${i + 1}`,
    title: `Healing Blog Post ${i + 1}`
  }));

  const healingCafes: CrawledPost[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    authorName: `Cafe Writer ${i + 1}`,
    title: `Healing Cafe Post ${i + 1}`
  }));

  const currentPosts = activeSection === 'blog' ? healingBlogs : healingCafes;

  return (
    <section className="mb-12">
      <SectionTitle title="Crawling" />
      
      <div className="mt-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-amber-600">
            {activeSection === 'blog' ? 'Healing Blogs' : 'Healing Cafes'}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveSection('blog')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'blog'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveSection('cafe')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'cafe'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cafes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <img
                  src={post.profileImage}
                  alt={post.authorName}
                  className="w-12 h-12 rounded-full object-cover mb-3"
                />
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {post.authorName}
                </p>
                <p className="text-xs text-gray-600 text-center line-clamp-2">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrawlingSection;