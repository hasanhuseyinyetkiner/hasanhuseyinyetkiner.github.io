
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import KeyAchievements from './components/KeyAchievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-primary text-accent font-sans selection:bg-highlight/30">
      <a className="skip-link" href="#main-content">{t('accessibility.skip')}</a>
      <Header />
      <main id="main-content" className="container mx-auto px-6 md:px-12" tabIndex={-1}>
        <Hero />
        <About />
        <KeyAchievements />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
