import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <ServiceCard 
          icon={<User className="text-amber-500" size={28} />}
          title="AI ChatBot" 
          description="Customized AI Chatbot for your needs, Build your own personalized psychological counseling chatbot."
          onClick={() => navigate('/chatbot')}
        />
        <ServiceCard 
          icon={<Heart className="text-amber-500" size={28} />}
          title="AI Letter" 
          description="Personal AI Letter System only for you, Feel free to share your worries with me"
          onClick={() => navigate('/ai-letter')}
        />
        <ServiceCard 
          icon={<Shield className="text-amber-500" size={28} />}
          title="To be Continue" 
          description="send me your idea PLZ !!! "
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;