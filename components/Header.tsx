import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const navLinks = [
  { href: '#summary', key: 'nav.summary' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#education', key: 'nav.education' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`} style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif" }}>
      <div className="container mx-auto flex items-center justify-between p-4 md:px-12">
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-accent hover:text-white transition-colors duration-300 relative group"
              style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: '500', letterSpacing: '-0.01em', fontSize: '15px' }}
            >
              {t(link.key)}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'tr' | 'en' | 'it')}
            className="bg-transparent text-accent border border-accent/30 rounded px-2 py-1 text-sm hover:border-highlight transition-colors cursor-pointer"
            style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif" }}
            aria-label="Dil Seçimi"
          >
            <option value="tr" className="bg-secondary text-accent">🇹🇷 TR</option>
            <option value="en" className="bg-secondary text-accent">🇬🇧 EN</option>
            <option value="it" className="bg-secondary text-accent">🇮🇹 IT</option>
          </select>
          <button className="md:hidden text-accent" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;