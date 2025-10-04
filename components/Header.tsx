import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`} style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif" }}>
      <div className="container mx-auto flex items-center justify-between py-3 px-3 sm:py-4 sm:px-4 md:px-12">
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <button
            onClick={toggleTheme}
            className="text-accent hover:text-highlight transition-all duration-300 p-1.5 md:p-2 rounded-lg hover:bg-secondary/50"
            aria-label="Tema Değiştir"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'tr' | 'en' | 'it')}
            className="bg-transparent text-accent border border-accent/30 rounded px-1.5 py-0.5 text-xs md:px-2 md:py-1 md:text-sm hover:border-highlight transition-colors cursor-pointer"
            style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif" }}
            aria-label="Dil Seçimi"
          >
            <option value="tr" className="bg-secondary text-accent">🇹🇷 TR</option>
            <option value="en" className="bg-secondary text-accent">🇬🇧 EN</option>
            <option value="it" className="bg-secondary text-accent">🇮🇹 IT</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;