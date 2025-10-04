import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="flex items-center min-h-screen py-20 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="md:w-1/2 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.95] tracking-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 200, letterSpacing: '-0.02em'}}>
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-light text-accent tracking-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.01em'}}>
            {t('hero.subtitle')}
          </p>
          <p className="mt-8 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-gray-300 font-normal leading-relaxed" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
            {t('hero.description')}
          </p>
          <div className="mt-12">
            <a href="#contact" className="inline-block px-10 py-4 bg-highlight text-white font-normal rounded-full shadow-xl hover:bg-opacity-90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, fontSize: '17px', letterSpacing: '-0.01em'}}>
              {t('hero.cta')}
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in-up [animation-delay:200ms]">
          <img 
            src="/d.jpeg" 
            alt="Hasan Hüseyin Yetkiner" 
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover object-right h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;