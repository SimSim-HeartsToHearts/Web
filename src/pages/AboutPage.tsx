import React, { useState } from 'react';
import { Heart, MessageSquare, Mail, User, X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ServiceDetailModalProps {
  title: string;
  description: string;
  details: string[];
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ title, description, details, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceDetails = {
    chatbot: {
      title: "AI ChatBot",
      description: "24/7 available AI counselor that understands and responds to your emotional needs with empathy and intelligence.",
      details: [
        "개인화된 대화 경험을 제공합니다",
        "감정 분석을 통한 맞춤형 응답을 제공합니다",
        "대화 내용은 안전하게 보관됩니다",
        "24시간 365일 이용 가능합니다",
        "정기적인 AI 업데이트로 더 나은 서비스를 제공합니다"
      ]
    },
    letter: {
      title: "AI Letter",
      description: "Express your feelings through letters and receive thoughtful, personalized responses from our AI companion.",
      details: [
        "감정을 편지로 표현하고 AI의 따뜻한 답장을 받아보세요",
        "편지 내용 분석을 통한 맞춤형 조언을 제공합니다",
        "정기적으로 편지를 주고받을 수 있습니다",
        "편지함에서 과거의 대화를 다시 볼 수 있습니다",
        "AI가 작성한 편지는 실제 사람의 감성을 담고 있습니다"
      ]
    },
    community: {
      title: "Community Support",
      description: "Connect with others, share experiences, and find support in our caring community.",
      details: [
        "다양한 사용자들과 경험을 공유할 수 있습니다",
        "익명으로 이야기를 나눌 수 있습니다",
        "전문가의 조언을 받을 수 있습니다",
        "관심사별 그룹에 참여할 수 있습니다",
        "실시간 채팅으로 즉각적인 소통이 가능합니다"
      ]
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <SectionTitle title="Introduce" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="text-amber-500">
              <Heart size={48} />
            </div>
          </div>
          <h3 className="text-center text-xl font-medium mb-2">심 心</h3>
          <p className="text-gray-600 text-center mb-4">마음에서 </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            심심 마음에 맘 서비스는 마음의학 전문으로 구성된 쉼 쉼 서비스 입니다.
            심심 마음에 맘 서비스는 마음 케어를 통으며 구성된 쉼 쉼 서비스 입니다.
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="text-amber-500">
              <Heart size={48} />
            </div>
          </div>
          <h3 className="text-center text-xl font-medium mb-2">심 心</h3>
          <p className="text-gray-600 text-center mb-4">마음으로</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            심심 마음에 맘 서비스는 마음의학 전문으로 구성된 쉼 쉼 서비스 입니다.
            심심 서비스는 마음의 치료, 마음의 케어와 치료 서비스를 전문적으로 제공하며 마음의 평화를 찾을 수 있습니다.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <SectionTitle title="Service Introduce" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            icon={<MessageSquare size={40} />}
            title="AI ChatBot"
            description="24/7 available AI counselor that understands and responds to your emotional needs with empathy and intelligence."
            onClick={() => setSelectedService('chatbot')}
          />
          <ServiceCard
            icon={<Mail size={40} />}
            title="AI Letter"
            description="Express your feelings through letters and receive thoughtful, personalized responses from our AI companion."
            onClick={() => setSelectedService('letter')}
          />
          <ServiceCard
            icon={<User size={40} />}
            title="Community Support"
            description="Connect with others, share experiences, and find support in our caring community."
            onClick={() => setSelectedService('community')}
          />
        </div>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
        <SectionTitle title="Developer Introduce" />
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/Jk1LLBg/dev-profile.jpg"
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Developer</span>
                <span className="text-gray-600">: SeongYeol. Ryu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Address</span>
                <span className="text-gray-600">: rsy1225@naver.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Git Hub </span>
                <span className="text-gray-600">: https://github.com/passionryu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Educate</span>
                <span className="text-gray-600">: Gachon.Univ(South Korea) Computer Engineering 20</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              self self self self self self self self self self self self
              self self self self self self self self self self self self
              self self self self self self self self self self self self
            </p>
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceDetailModal
          title={serviceDetails[selectedService as keyof typeof serviceDetails].title}
          description={serviceDetails[selectedService as keyof typeof serviceDetails].description}
          details={serviceDetails[selectedService as keyof typeof serviceDetails].details}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-amber-500 mb-4">{icon}</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default AboutPage;