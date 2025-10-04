import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const technicalSkills = [
  'C++', 'Qt', 'STL', 'Flutter', 'PostgreSQL', 'Node.js', 'Python',
  'TCP/IP', 'OpenCV', 'LSTM', 'REST', 'Time Serial Forecasting',
  'Express.js', 'Socket.io', 'Gstreamer', 'LLM', 'Deep Learning'
];

const personalSkills = [
  'Teamwork', 'Problem Solving', 'Leadership', 'Negotiation',
  'Presentation', 'Critical Thinking', 'Storytelling', 'Networking', 'Professionalism'
];

const SkillTag: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-secondary/70 py-2 px-4 rounded-lg shadow-md">
    <p className="text-white font-medium text-center" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500}}>{name}</p>
  </div>
);

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="skills">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.skills')}
      </h2>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-light text-white mb-6" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400, letterSpacing: '-0.01em'}}>
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-4 mb-12">
          {technicalSkills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-light text-white mb-6" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400, letterSpacing: '-0.01em'}}>
          Personal Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {personalSkills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
