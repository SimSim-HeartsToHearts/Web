import React from 'react';
import CommunitySection from '../components/CommunitySection';
import ServicesSection from '../components/ServicesSection';
import CrawlingSection from '../components/CrawlingSection';
import DeveloperNotice from '../components/DeveloperNotice';
import HealingSection from '../components/HealingSection';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <CommunitySection />
      <DeveloperNotice />
      <ServicesSection />
      <CrawlingSection />
      <HealingSection />
    </main>
  );
};

export default HomePage;