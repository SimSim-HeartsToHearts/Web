import React from 'react';
import SectionTitle from './SectionTitle';
import { Palette, Heart, Music, Camera, Video, BookOpen } from 'lucide-react';

const CreatingSection: React.FC = () => {
  return (
    <section className="mb-12">
      <SectionTitle title="Creating" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <CreativeCard 
          icon={<Palette size={24} />}
          title="Art" 
        />
        <CreativeCard 
          icon={<Heart size={24} />}
          title="Wellness" 
        />
        <CreativeCard 
          icon={<Music size={24} />}
          title="Music" 
        />
        <CreativeCard 
          icon={<Camera size={24} />}
          title="Photography" 
        />
        <CreativeCard 
          icon={<Video size={24} />}
          title="Video" 
        />
        <CreativeCard 
          icon={<BookOpen size={24} />}
          title="Learning" 
        />
      </div>
    </section>
  );
};

interface CreativeCardProps {
  icon: React.ReactNode;
  title: string;
}

const CreativeCard: React.FC<CreativeCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="h-36 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-2 text-gray-600">
            {icon}
          </div>
          <h3 className="text-md font-medium text-gray-800">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CreatingSection;