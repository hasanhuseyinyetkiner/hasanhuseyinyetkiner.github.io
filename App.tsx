
import React from 'react';
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
    <div className="bg-primary text-accent font-sans selection:bg-highlight/30">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
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

export default App;