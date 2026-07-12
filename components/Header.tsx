import React, { useEffect, useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = (mobile = false) => (
    <nav aria-label={t('nav.primary')} className={mobile ? 'flex flex-col gap-1 p-3' : 'hidden items-center space-x-6 lg:flex lg:space-x-8'}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={mobile ? 'rounded-lg px-4 py-3 text-base text-accent transition-colors hover:bg-primary/60 hover:text-white' : 'group relative text-accent transition-colors duration-300 hover:text-white'}
          style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em', fontSize: mobile ? '16px' : '15px' }}
        >
          {t(link.key)}
          {!mobile && <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-highlight transition-transform duration-300 ease-out group-hover:scale-x-100" />}
        </a>
      ))}
    </nav>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'border-highlight/10 bg-secondary/90 shadow-lg backdrop-blur-md' : 'border-transparent bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-3 py-3 sm:px-4 md:px-12 md:py-4">
        {navigation()}
        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-1.5 text-accent transition-all duration-300 hover:bg-secondary/50 hover:text-highlight md:p-2"
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {theme === 'dark' ? (
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as typeof language)}
            className="cursor-pointer rounded border border-accent/30 bg-transparent px-1.5 py-0.5 text-xs text-accent transition-colors hover:border-highlight md:px-2 md:py-1 md:text-sm"
            style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif" }}
            aria-label={t('language.select')}
          >
            <option value="tr" className="bg-secondary text-accent">🇹🇷 TR</option>
            <option value="en" className="bg-secondary text-accent">🇬🇧 EN</option>
            <option value="it" className="bg-secondary text-accent">🇮🇹 IT</option>
            <option value="de" className="bg-secondary text-accent">🇩🇪 DE</option>
          </select>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-accent transition-colors hover:bg-secondary/50 hover:text-highlight lg:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('nav.close') : t('nav.menu')}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMenuOpen ? <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && <div id="mobile-navigation" className="border-t border-highlight/10 bg-secondary/95 shadow-xl backdrop-blur-md lg:hidden">{navigation(true)}</div>}
    </header>
  );
};

export default Header;
