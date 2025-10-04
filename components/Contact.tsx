import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MailIcon, LinkedInIcon, WhatsAppIcon, GitHubIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      name: 'Email',
      emoji: '📧',
      icon: <MailIcon />,
      href: 'mailto:hasanhuseyinyetkiner@gmail.com',
      label: 'hasanhuseyinyetkiner@gmail.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      emoji: '💼',
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/hasan-huseyin-yetkiner/',
      label: 'LinkedIn Profile',
      color: 'hover:text-blue-500'
    },
    {
      name: 'WhatsApp',
      emoji: '💬',
      icon: <WhatsAppIcon />,
      href: 'https://wa.me/905526778264',
      label: '+90 552 677 82 64',
      color: 'hover:text-green-400'
    },
    {
      name: 'GitHub',
      emoji: '👨‍💻',
      icon: <GitHubIcon />,
      href: 'https://github.com/hasanhuseyinyetkiner',
      label: '@hasanhuseyinyetkiner',
      color: 'hover:text-purple-400'
    }
  ];
  
  return (
    <AnimatedSection id="contact">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
          {t('contact.title')}
        </h2>
        <p className="text-lg text-accent mb-12" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          {t('contact.description')}
        </p>
        
        {/* Primary CTA Button */}
        <a 
          href="mailto:hasanhuseyinyetkiner@gmail.com" 
          className="inline-block px-10 py-4 bg-highlight text-white font-normal rounded-full shadow-xl hover:bg-opacity-90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5 mb-16" 
          style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, fontSize: '17px', letterSpacing: '-0.01em'}}
        >
          {t('contact.cta')}
        </a>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-secondary/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-800 hover:border-highlight/50 ${link.color}`}
              aria-label={link.name}
            >
              <div className="flex flex-col items-center space-y-3">
                {/* Emoji */}
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {link.emoji}
                </span>
                
                {/* Icon */}
                <div className="text-gray-400 group-hover:text-current transition-colors duration-300">
                  {link.icon}
                </div>
                
                {/* Name */}
                <h3 
                  className="text-white font-semibold text-lg" 
                  style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 600}}
                >
                  {link.name}
                </h3>
                
                {/* Label */}
                <p 
                  className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 text-center" 
                  style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}
                >
                  {link.label}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Text */}
        <p 
          className="text-gray-500 text-sm mt-12" 
          style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}
        >
          🚀 Available for new opportunities and collaborations
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
