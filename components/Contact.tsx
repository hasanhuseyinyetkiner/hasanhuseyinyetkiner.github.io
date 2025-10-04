import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MailIcon, LinkedInIcon, WhatsAppIcon, GitHubIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
          {t('contact.title')}
        </h2>
        <p className="text-lg text-accent mb-12" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          {t('contact.description')}
        </p>
        <a href="mailto:hasanhuseyinyetkiner@gmail.com" className="inline-block px-10 py-4 bg-highlight text-white font-normal rounded-full shadow-xl hover:bg-opacity-90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, fontSize: '17px', letterSpacing: '-0.01em'}}>
          {t('contact.cta')}
        </a>
        <div className="mt-16 flex justify-center items-center gap-8">
          <a href="mailto:hasanhuseyinyetkiner@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110" aria-label="Email">
            <MailIcon />
          </a>
          <a href="https://www.linkedin.com/in/hasan-huseyin-yetkiner/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://wa.me/905526778264" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
          <a href="https://github.com/hasanhuseyinyetkiner" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
