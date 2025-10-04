import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="summary">
      <div className="max-w-3xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 sm:mb-8 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>{t('about.title')}</h2>
        <div className="text-left space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          <p className="text-gray-300">{t('about.p1')}</p>
          <p className="text-gray-300">{t('about.p2')}</p>
          <p className="text-gray-300">{t('about.p3')}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;