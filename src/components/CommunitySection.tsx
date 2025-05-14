import React from 'react';
import { Heart } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface PostCardProps {
  profileImage: string;
  date: string;
  title: string;
}

const PostCard: React.FC<PostCardProps> = ({ profileImage, date, title }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 transition-transform hover:transform hover:scale-105 cursor-pointer">
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt="Author"
          className="w-12 h-12 rounded-full object-cover mb-3"
        />
        <p className="text-xs text-gray-500 mb-1 text-center">{date}</p>
        <h3 className="text-sm font-medium text-gray-900 text-center line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

const CommunitySection: React.FC = () => {
  const topLikedPosts = [
    { id: 1, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-20", title: "Most Liked Post 1" },
    { id: 2, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-19", title: "Most Liked Post 2" },
    { id: 3, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-18", title: "Most Liked Post 3" },
  ];

  const recentPosts = [
    { id: 4, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-21", title: "Recent Post 1" },
    { id: 5, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-21", title: "Recent Post 2" },
    { id: 6, profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", date: "2024-03-21", title: "Recent Post 3" },
  ];

  return (
    <section className="mb-12 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-amber-50 p-2">
        <div className="text-center text-gray-600 text-sm">
          심심(心心) - 마음에서 마음으로 
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4">
            <div className="bg-amber-50 p-6 rounded-lg flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-amber-100 rounded-md mb-4 flex items-center justify-center">
                <div className="text-amber-600">
                  <Heart size={50} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">심심</h3>
                <p className="text-xs text-gray-500">마음에 마음으로</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3 pl-4">Most Liked Posts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
                  {topLikedPosts.map(post => (
                    <PostCard key={post.id} {...post} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3 pl-4">Recent Posts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
                  {recentPosts.map(post => (
                    <PostCard key={post.id} {...post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;