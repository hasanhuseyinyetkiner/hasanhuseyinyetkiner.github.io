import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/50 py-6" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif"}}>
      <div className="container mx-auto text-center text-gray-400">
        <div className="mb-4 flex justify-center">
          <img 
            src="/text-1759577902818.png" 
            alt="Signature" 
            className="h-16 opacity-80"
          />
        </div>
        <div className="flex justify-center items-center gap-4 mb-2">
          <a 
            href="https://www.linkedin.com/in/hasan-huseyin-yetkiner/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-accent hover:text-highlight transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <p style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          &copy; {currentYear} Hasan Hüseyin Yetkiner. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
