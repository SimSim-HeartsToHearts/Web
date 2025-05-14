import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

interface BotConfig {
  name: string;
  description: string;
}

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBot, setSelectedBot] = useState('D');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [customBots, setCustomBots] = useState<Record<string, BotConfig>>({
    '1': { name: '', description: '' },
    '2': { name: '', description: '' },
    '3': { name: '', description: '' },
  });
  const [editingBot, setEditingBot] = useState<string | null>(null);
  const [tempBotConfig, setTempBotConfig] = useState<BotConfig>({ name: '', description: '' });

  const defaultBotInfo = {
    name: 'Default Bot',
    description: '기본 AI 챗봇입니다. 당신의 이야기를 들어줄 준비가 되어있습니다.',
  };

  const handleBotSelect = (botId: string) => {
    setSelectedBot(botId);
    setMessages([]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', content: inputMessage },
    ];
    setMessages(newMessages);
    setInputMessage('');

    // Simulated bot response - this would be replaced with actual API call
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { role: 'bot', content: '챗봇의 응답이 여기에 표시됩니다.' },
      ]);
    }, 1000);
  };

  const handleEditBot = (botId: string) => {
    setEditingBot(botId);
    setTempBotConfig(customBots[botId] || { name: '', description: '' });
  };

  const handleSaveBot = () => {
    if (!editingBot) return;
    setCustomBots({
      ...customBots,
      [editingBot]: { ...tempBotConfig },
    });
    setEditingBot(null);
  };

  const handleFinishChat = () => {
    navigate('/ai-report', { state: { messages } });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="space-y-6">
          {/* Bot Selection */}
          <div className="bg-gray-200 p-4 rounded-lg flex space-x-4">
            {['D', '1', '2', '3'].map((botId) => (
              <button
                key={botId}
                onClick={() => handleBotSelect(botId)}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  selectedBot === botId
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {botId}
              </button>
            ))}
          </div>

          {/* Bot Configuration */}
          <div className="bg-gray-100 p-6 rounded-lg">
            {selectedBot === 'D' ? (
              <div>
                <h3 className="font-medium mb-2">{defaultBotInfo.name}</h3>
                <p className="text-sm text-gray-600">{defaultBotInfo.description}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bot Name
                  </label>
                  {editingBot === selectedBot ? (
                    <input
                      type="text"
                      value={tempBotConfig.name}
                      onChange={(e) => setTempBotConfig({ ...tempBotConfig, name: e.target.value })}
                      className="w-full p-2 border rounded-md"
                    />
                  ) : (
                    <div className="flex justify-between items-center">
                      <span>{customBots[selectedBot]?.name || 'Unnamed Bot'}</span>
                      <button
                        onClick={() => handleEditBot(selectedBot)}
                        className="text-sm text-green-500 hover:text-green-600"
                      >
                        EDIT
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bot Description
                  </label>
                  {editingBot === selectedBot ? (
                    <>
                      <textarea
                        value={tempBotConfig.description}
                        onChange={(e) => setTempBotConfig({ ...tempBotConfig, description: e.target.value })}
                        className="w-full p-2 border rounded-md h-32"
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={handleSaveBot}
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          SAVE
                        </button>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600">
                      {customBots[selectedBot]?.description || 'No description'}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm flex flex-col h-[80vh]">
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
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

          <div className="border-t p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 p-2 border rounded-md"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gray-800 text-white px-4 rounded-md hover:bg-gray-700 whitespace-nowrap"
                >
                  Send
                </button>
              </div>

              <button
                onClick={handleFinishChat}
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Finish Chatting, show me AI Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;