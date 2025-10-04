import React from 'react';
import AnimatedSection from './AnimatedSection';

const projectData = [
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

const ProjectCard: React.FC<typeof projectData[0]> = ({ title, description }) => (
  <div className="bg-secondary/70 p-6 rounded-lg shadow-lg h-full transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-4xl font-serif font-light text-center text-white mb-16 leading-tighter tracking-tighter">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;