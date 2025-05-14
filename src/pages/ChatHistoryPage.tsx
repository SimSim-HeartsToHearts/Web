import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ChatHistory {
  id: number;
  botName: string;
  date: string;
  preview: string;
}

const ChatHistoryPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for custom bots
  const customBots = [
    { id: 1, name: 'Emotional Support Bot', description: 'A bot designed for emotional support' },
    { id: 2, name: 'Anxiety Helper', description: 'Specialized in anxiety management' },
    { id: 3, name: 'Daily Companion', description: 'Your daily mental wellness companion' },
  ];

  // Mock data for chat history
  const chatHistories: ChatHistory[] = [
    { id: 1, botName: 'Emotional Support Bot', date: '2024-03-21', preview: 'Last conversation about managing stress...' },
    { id: 2, botName: 'Anxiety Helper', date: '2024-03-20', preview: 'Discussion about breathing techniques...' },
    { id: 3, botName: 'Daily Companion', date: '2024-03-19', preview: 'Daily check-in conversation...' },
    // Add more history items as needed
  ];

  const handleHistoryClick = (id: number) => {
    navigate('/ai-report', { 
      state: { 
        messages: [
          { role: 'user', content: 'Sample user message' },
          { role: 'bot', content: 'Sample bot response' },
        ] 
      } 
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button
        onClick={() => navigate('/mypage')}
        className="mb-6 flex items-center text-amber-600 hover:text-amber-700"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to My Page
      </button>

      <SectionTitle title="My Chatbot History" />

      {/* Custom Bots Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">My Custom Bots</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {customBots.map(bot => (
            <div key={bot.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-3">
                <MessageSquare className="w-6 h-6 text-amber-500 mr-2" />
                <h4 className="font-medium">{bot.name}</h4>
              </div>
              <p className="text-sm text-gray-600">{bot.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat History Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">Recent Conversations</h3>
        <div className="space-y-4">
          {chatHistories.map(history => (
            <div
              key={history.id}
              onClick={() => handleHistoryClick(history.id)}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-amber-600">{history.botName}</h4>
                <span className="text-sm text-gray-500">{history.date}</span>
              </div>
              <p className="text-sm text-gray-600">{history.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryPage;