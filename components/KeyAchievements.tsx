import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { TrophyIcon, AcademicCapIcon, BriefcaseIcon, UsersIcon } from './Icons';

const achievements = [
  {
    icon: <TrophyIcon />,
    title: 'Best Employee Award',
    description: 'Ranked first in performance among 196 employees at Millenicom.',
  },
  {
    icon: <AcademicCapIcon />,
    title: 'Accelerated Graduation',
    description: 'Completed the double major program in 3 years instead of 4.',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Gimbal Interface Integration',
    description: 'Contributed to the integrated use of C++ and the Qt Framework for the Gimbal interface at Baykar.',
  },
  {
    icon: <UsersIcon />,
    title: 'Technical Support Leadership',
    description: 'Led a team and provided training to resolve technical issues for more than 1,000 Millenicom customers.',
  },
];

const AchievementCard: React.FC<typeof achievements[0]> = ({ icon, title, description }) => (
  <div className="bg-secondary/70 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
    <div className="text-highlight mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 600}}>{title}</h3>
    <p className="text-gray-300" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>{description}</p>
  </div>
);

const KeyAchievements: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="achievements">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.achievements')}
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default KeyAchievements;
