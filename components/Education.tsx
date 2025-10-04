import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const educationData = [
  {
    degree: "Master's Degree (Computer Engineer)",
    institution: 'Selcuk University',
    period: '01/2025 - Present',
    details: ['Taken Courses: Cryptography, Social Network Analysis, Natural Language Processing (NLP), Computer-Aided Medical Image Processing'],
  },
  {
    degree: 'Electrical-Electronics Engineer',
    institution: 'Selcuk University',
    period: '09/2020 - 06/2024',
    details: ['GPA: 3.27 / 4.00', 'Successfully completed within the standard 4-year program duration.'],
  },
  {
    degree: 'Computer Engineer',
    institution: 'Selcuk University',
    period: '10/2021 - 06/2024',
    details: ['GPA: 3.11 / 4.00', 'Completed double major program in 3 years instead of 4 (accelerated graduation).'],
  }
];

const EducationItem: React.FC<typeof educationData[0]> = ({ degree, institution, period, details }) => (
  <div className="relative pl-8 pb-12 border-l border-highlight/20 last:pb-0">
    <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] bg-highlight rounded-full"></div>
    <p className="text-sm text-gray-500 mb-2" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400, letterSpacing: '-0.01em'}}>
      {period}
    </p>
    <h3 className="text-xl md:text-2xl text-white mb-1" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em'}}>
      {degree}
    </h3>
    <p className="text-base text-accent mb-4" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
      {institution}
    </p>
    <div className="space-y-2">
      {details.map((detail, i) => (
        <p key={i} className="text-gray-400 leading-relaxed text-sm md:text-base flex items-start" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          <span className="text-highlight mr-3 mt-1.5 flex-shrink-0">•</span>
          <span>{detail}</span>
        </p>
      ))}
    </div>
  </div>
);

const Education: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="education">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.education')}
      </h2>
      <div className="max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
