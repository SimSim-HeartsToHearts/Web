import React from 'react';
import { useLocation } from 'react-router-dom';

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

const AIReportPage: React.FC = () => {
  const location = useLocation();
  const messages = (location.state?.messages || []) as ChatMessage[];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chat History */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">대화 내용</h2>
          <div className="space-y-4 h-[600px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Report */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">Sim Sim AI의 보고서</h2>
          <div className="h-[600px] overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium mb-2">대화 내용 요약</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    {/* This would be replaced with actual API response */}
                    대화 내용에 대한 1-3줄 요약이 이곳에 표시됩니다.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-md font-medium mb-2">AI 격려 메시지</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    {/* This would be replaced with actual API response */}
                    AI가 분석한 대화를 바탕으로 한 격려와 응원 메시지가 이곳에 표시됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReportPage;