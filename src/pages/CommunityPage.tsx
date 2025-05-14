import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

interface AddPostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Create New Post</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter post title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md h-32"
              placeholder="Enter post content"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const POSTS_PER_PAGE = 5;

const CommunityPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      title: `게시물 제목 ${i + 1}`,
      author: `작성자 ${i + 1}`,
      date: '2024-03-15',
      content: '게시물 내용이 여기에 표시됩니다...'
    }))
  );

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
      author: 'Current User',
      date: new Date().toISOString().split('T')[0]
    };
    setPosts([newPost, ...posts]);
  };

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <SectionTitle title="Community" />
      
      <div className="mt-8">
        {/* Most Liked Posts Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-medium mb-4">Most Liked Posts</h3>
          <div className="flex flex-row gap-4 overflow-x-auto pb-4">
            {currentPosts.slice(0, 3).map(post => (
              <Link
                key={post.id}
                to={`/community/${post.id}`}
                className="flex-shrink-0 w-64 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {post.author}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Add Post Button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full bg-green-500 text-white py-2 rounded-lg mb-8 hover:bg-green-600 transition-colors"
        >
          Add Post
        </button>

        {/* Posts List */}
        <div className="space-y-4">
          {currentPosts.map(post => (
            <Link
              key={post.id}
              to={`/community/${post.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {showAddModal && (
        <AddPostModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddPost}
        />
      )}
    </main>
  );
};

export default CommunityPage;