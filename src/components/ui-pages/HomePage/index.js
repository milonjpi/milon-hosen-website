'use client';

import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import ProjectSection from './ProjectSection';
import ReviewSection from './ReviewSection';
import ServiceSection from './ServiceSection';
import SkillSection from './SkillSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <SkillSection />
      <ProjectSection />
      <ReviewSection />
      <NewsSection />
    </>
  );
};

export default HomePage;
