import React from 'react';
import AnimatedSection from './AnimatedSection';

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
    <p className="text-white font-medium text-center">{name}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-4xl font-serif font-light text-center text-white mb-16 leading-tighter tracking-tighter">Skills & Expertise</h2>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-sans font-semibold text-white mb-6">Technical Skills</h3>
        <div className="flex flex-wrap gap-4 mb-12">
          {technicalSkills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
        <h3 className="text-2xl font-sans font-semibold text-white mb-6">Personal Skills</h3>
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