import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Heart, Flag, Trash2, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface ReportReason {
  id: number;
  label: string;
}

interface ReportModalProps {
  onClose: () => void;
  onSubmit: (reasons: number[]) => void;
  type: 'post' | 'comment';
}

const reportReasons: ReportReason[] = [
  { id: 1, label: '부적절한 콘텐츠' },
  { id: 2, label: '스팸 또는 광고' },
  { id: 3, label: '혐오 발언' },
  { id: 4, label: '개인정보 노출' },
  { id: 5, label: '저작권 침해' }
];

const ReportModal: React.FC<ReportModalProps> = ({ onClose, onSubmit, type }) => {
  const [selectedReasons, setSelectedReasons] = useState<number[]>([]);

  const handleReasonToggle = (reasonId: number) => {
    setSelectedReasons(prev =>
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    );
  };

  const handleSubmit = () => {
    onSubmit(selectedReasons);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-medium mb-4">
          {type === 'post' ? '게시글 신고하기' : '댓글 신고하기'}
        </h3>
        <div className="space-y-3">
          {reportReasons.map(reason => (
            <label key={reason.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedReasons.includes(reason.id)}
                onChange={() => handleReasonToggle(reason.id)}
                className="form-checkbox h-5 w-5 text-amber-600"
              />
              <span>{reason.label}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-700"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            신고하기
          </button>
        </div>
      </div>
    </div>
  );
};

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState<'post' | 'comment'>('post');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: '댓글 작성자 1',
      content: '좋은 글 감사합니다!',
      date: '2024-03-21'
    },
    {
      id: 2,
      author: '댓글 작성자 2',
      content: '매우 유익한 내용이네요.',
      date: '2024-03-21'
    }
  ]);

  // Mock data for the post
  const post = {
    id: Number(id),
    title: `게시물 제목 ${id}`,
    author: `작성자 ${id}`,
    date: '2024-03-15',
    content: '게시물의 상세 내용이 여기에 표시됩니다. 이 내용은 실제 데이터베이스에서 가져온 내용으로 대체될 것입니다.'
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleReport = (reasons: number[]) => {
    console.log('Report submitted with reasons:', reasons);
    // Handle report submission
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      author: '현재 사용자',
      content: newComment,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <Link
        to="/community"
        className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Community
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{post.author}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 ${
                  liked ? 'text-red-500' : 'text-gray-500'
                } hover:text-red-600`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                <span>{likeCount}</span>
              </button>
              <button
                onClick={() => {
                  setReportType('post');
                  setShowReportModal(true);
                }}
                className="text-gray-500 hover:text-red-600"
              >
                <Flag className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-red-600">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">댓글</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 작성해주세요"
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>작성</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map(comment => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-gray-500 text-sm">{comment.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setReportType('comment');
                          setShowReportModal(true);
                        }}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <Flag className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onSubmit={handleReport}
          type={reportType}
        />
      )}
    </main>
  );
};

export default PostDetail;