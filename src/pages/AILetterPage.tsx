import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Heart, Star, Coffee, Sun, Moon, Cloud, Music, BookOpen } from 'lucide-react';

interface AIResponse {
  content: string;
  contentSummary: string[];
  aiResponse: string;
}

interface EmotionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const emotionCards: EmotionCard[] = [
  { icon: <Heart size={24} />, title: '사랑', description: '사랑과 관련된 이야기' },
  { icon: <Star size={24} />, title: '희망', description: '희망찬 이야기' },
  { icon: <Coffee size={24} />, title: '일상', description: '일상적인 이야기' },
  { icon: <Sun size={24} />, title: '행복', description: '행복한 순간' },
  { icon: <Moon size={24} />, title: '고민', description: '걱정되는 일' },
  { icon: <Cloud size={24} />, title: '위로', description: '위로가 필요한 순간' },
  { icon: <Music size={24} />, title: '감동', description: '감동적인 이야기' },
  { icon: <BookOpen size={24} />, title: '성장', description: '성장하는 이야기' }
];

const warmMessages = [
  "당신의 이야기를 들려주세요...",
  "무슨 일이 있었나요?",
  "마음속 이야기를 나눠주세요",
  "오늘 하루는 어땠나요?",
  "힘든 일이 있었나요?",
  "제가 들어드릴게요",
  "함께 이야기 나누어요",
  "마음을 열어주세요",
  "당신의 이야기에 귀 기울이고 있어요",
  "편하게 말씀해주세요",
  "모든 이야기를 들을 준비가 되어있어요",
  "당신의 감정을 나누어주세요",
  "무엇이 걱정인가요?",
  "함께 고민을 나누어보아요",
  "당신의 생각이 궁금해요",
  "마음속 무거운 짐을 내려놓으세요",
  "이야기를 시작해주세요",
  "당신의 목소리에 귀 기울이고 있어요",
  "무엇이 필요하신가요?",
  "당신의 이야기를 기다리고 있어요"
];

const AILetterPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [concern, setConcern] = useState('');
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const randomMessage = warmMessages[Math.floor(Math.random() * warmMessages.length)];
    setCurrentMessage(randomMessage);
    let index = 0;
    let direction = true;
    
    const interval = setInterval(() => {
      if (direction) {
        if (index <= randomMessage.length) {
          setDisplayedText(randomMessage.slice(0, index));
          index++;
        } else {
          setTimeout(() => {
            direction = false;
          }, 3500);
        }
      } else {
        if (index >= 0) {
          setDisplayedText(randomMessage.slice(0, index));
          index--;
        } else {
          direction = true;
          index = 0;
          const nextMessage = warmMessages[(warmMessages.indexOf(randomMessage) + 1) % warmMessages.length];
          setCurrentMessage(nextMessage);
        }
      }
    }, 130);

    return () => clearInterval(interval);
  }, [currentMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmotion) {
      alert('감정을 선택해주세요');
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setResponse({
        content: concern,
        contentSummary: [
          "첫 번째 요약 포인트입니다.",
          "두 번째 요약 포인트입니다.",
          "세 번째 요약 포인트입니다."
        ],
        aiResponse: "AI의 따뜻한 격려 메시지가 여기에 표시됩니다. 당신의 고민을 깊이 이해하고 공감하며, 함께 해결책을 찾아가고 싶습니다. 힘들 때마다 이렇게 마음을 나눌 수 있어 기쁩니다. 앞으로도 당신의 이야기에 귀 기울이고 싶습니다."
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl min-h-screen -to-b from-amber-50 to-white">
      {!response ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Emotion Selection - Left Side on Desktop, Top on Mobile */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <h3 className="text-lg font-medium mb-4">감정 선택</h3>
              <div className="grid grid-cols-2 gap-4">
                {emotionCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedEmotion(card.title)}
                    className={`p-4 rounded-lg flex flex-col items-center text-center transition-all ${
                      selectedEmotion === card.title
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className={`mb-2 ${selectedEmotion === card.title ? 'text-white' : 'text-amber-500'}`}>
                      {card.icon}
                    </div>
                    <h4 className="font-medium">{card.title}</h4>
                    <p className="text-sm mt-1">{card.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message Input - Right Side on Desktop, Bottom on Mobile */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h2 className="text-2xl font-medium text-center mb-2">마음의 편지</h2>
              <div className="text-center mb-6 h-8 text-amber-600 font-medium">
                {displayedText}
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <textarea
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full h-64 p-6 border border-amber-200 rounded-lg resize-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-amber-50/30"
                    placeholder="이야기를 시작해주세요..."
                  />
                  <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
                    {concern.length} 자
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading || !selectedEmotion}
                    className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 disabled:opacity-50 disabled:hover:transform-none"
                  >
                    {isLoading ? (
                      "처리중..."
                    ) : (
                      <>
                        <Send size={18} />
                        <span>마음 전하기</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-medium text-center mb-6">AI의 답장</h2>
          
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3">당신의 이야기</h3>
              <p className="text-gray-700">{response.content}</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-amber-200 transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3">요약</h3>
              <ul className="list-disc list-inside space-y-2">
                {response.contentSummary.map((summary, index) => (
                  <li key={index} className="text-gray-700">{summary}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3">AI의 메시지</h3>
              <p className="text-gray-700 leading-relaxed">
                {response.aiResponse}
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {/* Save logic here */}}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                저장하기
              </button>
              <button
                onClick={() => navigate('/home')}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                저장 안함
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AILetterPage;