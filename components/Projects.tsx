import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    title: 'AI-powered Herd Management System (Ongoing)',
    description: 'Developing a scalable system integrating Flutter, RESTful API, PostgreSQL, Vector Database, YOLO, LSTM, and GRU. Strengthening decision-making mechanisms with AI algorithms.',
  },
  {
    title: 'Mini Soccer Mobile App',
    description: 'Designed and implemented a mobile app for booking soccer fields using FlutterFlow Framework.',
  },
  {
    title: 'Plant Classification',
    description: 'Developed two deep learning models for plant classification and compared their performance.',
  },
  {
    title: 'Breast Cancer Detection',
    description: 'Built a software system for breast cancer detection using mammography images with deep learning techniques.',
  }
];

const ProjectCard: React.FC<typeof projects[0]> = ({ title, description }) => (
  <div className="bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-highlight/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
    <h3 className="text-lg md:text-xl text-white mb-3" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em'}}>
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed flex-grow" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
      {description}
    </p>
  </div>
);

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="projects">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.projects')}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
