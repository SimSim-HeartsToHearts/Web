import React, { useState } from 'react';
import { User, Send, LogOut, UserCircle, MessageSquare, Mail, HelpCircle, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Mock data for community logs
  const myPosts = [
    { id: 1, title: "My First Post", date: "2024-03-20" },
    { id: 2, title: "Another Post", date: "2024-03-19" },
    { id: 3, title: "Recent Post", date: "2024-03-18" },
  ];

  const myComments = [
    { id: 1, postTitle: "Interesting Discussion", comment: "Great point!", date: "2024-03-20" },
    { id: 2, postTitle: "Tech Talk", comment: "I agree with this", date: "2024-03-19" },
    { id: 3, postTitle: "Community Event", comment: "Looking forward to it", date: "2024-03-18" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
    setFeedback('');
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <SectionTitle title="My Page" />
      
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">홍길동</h2>
            <p className="text-gray-600 mb-4">@honggildong</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => navigate('/profile')}
                className="inline-flex items-center justify-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <UserCircle className="w-5 h-5 mr-2" />
                View Profile
              </button>
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* My Services Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">My Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            onClick={() => navigate('/chat-history')}
            className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-all duration-300"
          >
            <div className="h-24 flex items-center justify-center flex-col">
              <MessageSquare className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-gray-800 font-medium">AI ChatBot History</span>
            </div>
          </div>
          <div 
            onClick={() => navigate('/ai-letter-history')}
            className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-all duration-300"
          >
            <div className="h-24 flex items-center justify-center flex-col">
              <Mail className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-gray-800 font-medium">AI Letter History</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="h-24 flex items-center justify-center flex-col">
              <HelpCircle className="w-8 h-8 text-amber-500 mb-2" />
              <span className="text-gray-800 font-medium">To Be Continue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Community History */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Community History</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h4 className="font-medium mb-4">My Posts</h4>
            <div className="space-y-3">
              {myPosts.map(post => (
                <div key={post.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{post.title}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <button className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h4 className="font-medium mb-4">My Comments</h4>
            <div className="space-y-3">
              {myComments.map(comment => (
                <div key={comment.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{comment.postTitle}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-500">{comment.date}</span>
                      <button className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* To Developer Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">To Developer</h3>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="flex-1 min-h-[100px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="개발자에게 요구하는 요구사항 혹은 신고사항을 입력해주세요."
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2 h-fit"
            >
              <Send size={16} />
              <span>Send</span>
            </button>
          </div>
        </form>

        {/* Feedback Message */}
        {showMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            요구하신 내용이 개발자에게 전송되었습니다.
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPage;