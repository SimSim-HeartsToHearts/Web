import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Mail, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <SectionTitle title="Service" />
      
      <div className="mt-8 space-y-6">
        {/* Chatbot Service Button - Left aligned */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate('/chatbot')}
            className="w-full md:w-2/3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-8 group h-48"
          >
            <div className="flex items-center space-x-4">
              <div className="text-amber-500 group-hover:text-amber-600 transition-colors">
                <MessageSquare size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900">Chatbot Service</h3>
                <p className="text-gray-600 mt-2">AI-powered chatbot for instant assistance. Get personalized support and guidance through our advanced conversational AI system.</p>
              </div>
            </div>
          </button>
        </div>

        {/* AI Letter Service Button - Right aligned */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/ai-letter')}
            className="w-full md:w-2/3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-8 group h-48"
          >
            <div className="flex items-center space-x-4">
              <div className="text-amber-500 group-hover:text-amber-600 transition-colors">
                <Mail size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900">AI Letter</h3>
                <p className="text-gray-600 mt-2">Personalized AI letter writing service. Share your thoughts and feelings through our AI-powered letter writing assistant.</p>
              </div>
            </div>
          </button>
        </div>

        {/* Coming Soon Service Button - Left aligned */}
        <div className="flex justify-start">
          <button
            className="w-full md:w-2/3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-8 group h-48 cursor-not-allowed opacity-75"
          >
            <div className="flex items-center space-x-4">
              <div className="text-amber-500 group-hover:text-amber-600 transition-colors">
                <HelpCircle size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900">Coming Soon</h3>
                <p className="text-gray-600 mt-2">Exciting new features and services are currently under development. Stay tuned for more updates!</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;