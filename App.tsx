
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

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-primary text-accent font-sans selection:bg-highlight/30 snap-y snap-mandatory h-screen overflow-y-scroll">
          <Header />
          <main className="container mx-auto px-6 md:px-12">
            <section className="snap-start snap-always">
              <Hero />
            </section>
            <section className="snap-start snap-always">
              <About />
            </section>
            <section className="snap-start snap-always">
              <KeyAchievements />
            </section>
            <section className="snap-start snap-always">
              <Experience />
            </section>
            <section className="snap-start snap-always">
              <Education />
            </section>
            <section className="snap-start snap-always">
              <Projects />
            </section>
            <section className="snap-start snap-always">
              <Skills />
            </section>
            <section className="snap-start snap-always">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
