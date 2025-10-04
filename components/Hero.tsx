import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex items-center min-h-screen py-20 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="md:w-1/2 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white leading-tighter tracking-tighter">
            Hasan Hüseyin Yetkiner
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent">
            Electrical-Electronics & Computer Engineer
          </p>
          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-gray-300">
            A resilient and innovative engineer with expertise in C++, Qt Framework, and AI/ML, passionate about solving complex challenges at the intersection of advanced engineering and artificial intelligence.
          </p>
          <div className="mt-10">
            <a href="#contact" className="px-8 py-3 bg-highlight text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <img
                src="https://storage.googleapis.com/aai-web-samples/scenarios/portfolio-cv-image.png"
                alt="Hasan Hüseyin Yetkiner"
                className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-highlight shadow-2xl"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;