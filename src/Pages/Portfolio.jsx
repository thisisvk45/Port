import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ImpactSection from '../components/ImpactSection';
import EducationSection from '../components/EducationSection';
import CareerProjectsSection from '../components/CareerProjectsSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactSection />
        <EducationSection />
        <CareerProjectsSection />
        <ProjectsSection />
        <BlogSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}