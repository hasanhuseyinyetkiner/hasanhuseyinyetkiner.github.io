import React from 'react';
import AnimatedSection from './AnimatedSection';

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
  <div className="relative pl-10 pb-10 border-l-2 border-highlight/30 last:pb-0">
    <div className="absolute -left-2.5 top-1 w-5 h-5 bg-secondary border-2 border-highlight rounded-full"></div>
    <p className="text-sm text-gray-400 mb-1">{period}</p>
    <h3 className="text-xl font-semibold text-white">{degree}</h3>
    <p className="text-md text-accent font-semibold mb-2">{institution}</p>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
        {details.map((detail, i) => <li key={i}>{detail}</li>)}
    </ul>
  </div>
);

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <h2 className="text-4xl font-serif font-light text-center text-white mb-16 leading-tighter tracking-tighter">Education</h2>
      <div className="max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;