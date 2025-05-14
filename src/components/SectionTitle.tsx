import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="relative mb-6 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-amber-200"></div>
      </div>
      <div className="relative z-10 bg-gray-50 px-4">
        <h2 className="text-xl font-serif font-medium text-amber-600">
          <span className="mr-1">Sim Sim</span>
          <span className="text-sm italic">— {title}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;