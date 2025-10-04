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
        <p style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          &copy; {currentYear} Hasan Hüseyin Yetkiner. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
