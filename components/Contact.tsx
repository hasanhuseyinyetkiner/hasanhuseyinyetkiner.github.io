import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LinkedInIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif font-light text-white mb-4 leading-tighter tracking-tighter">Let's Connect</h2>
        <p className="text-lg text-accent mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <a href="mailto:hasanhuseyinyetkiner@gmail.com" className="inline-block px-10 py-4 bg-highlight text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          Send me an Email
        </a>
        <div className="mt-16 flex justify-center items-center space-x-8">
          <a href="https://www.linkedin.com/in/hasan-huseyin-yetkiner/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
           <a href="mailto:hasanhuseyinyetkiner@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;