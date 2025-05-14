import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface LetterHistory {
  id: number;
  date: string;
  content: string;
  response: string;
  summary: string[];
}

const AILetterHistoryPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for letter history
  const letterHistory: LetterHistory[] = [
    {
      id: 1,
      date: '2024-03-21',
      content: '오늘은 정말 힘든 하루였어요...',
      response: 'AI의 따뜻한 응답이 여기에 표시됩니다...',
      summary: ['첫 번째 요약 포인트', '두 번째 요약 포인트', '세 번째 요약 포인트']
    },
    {
      id: 2,
      date: '2024-03-20',
      content: '좋은 일이 있었던 하루...',
      response: '당신의 기쁨을 함께 나누고 싶습니다...',
      summary: ['긍정적인 감정 표현', '성취감 달성', '미래에 대한 희망']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button
        onClick={() => navigate('/mypage')}
        className="mb-6 flex items-center text-amber-600 hover:text-amber-700"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to My Page
      </button>

      <SectionTitle title="AI Letter History" />

      <div className="space-y-6">
        {letterHistory.map((letter) => (
          <div
            key={letter.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{letter.date}</span>
                <button className="text-red-500 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="bg-amber-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">나의 이야기</h3>
                <p className="text-gray-700">{letter.content}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">요약</h3>
                <ul className="list-disc list-inside space-y-1">
                  {letter.summary.map((point, index) => (
                    <li key={index} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-amber-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">AI의 답장</h3>
                <p className="text-gray-700">{letter.response}</p>
              </div>

              <div className="flex justify-end">
                <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
                  <Heart size={18} />
                  <span>Save to Favorites</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AILetterHistoryPage;