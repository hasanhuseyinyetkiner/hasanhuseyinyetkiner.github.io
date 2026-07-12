import React from 'react';
import { heroMetrics } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import { Theme, useTheme } from '../contexts/ThemeContext';

const heroImageSources: Record<Theme, { src: string; srcSet: string }> = {
  dark: {
    src: '/hero/dark-1024.webp',
    srcSet: '/hero/dark-640.webp 640w, /hero/dark-1024.webp 1024w, /hero/dark-1600.webp 1600w',
  },
  light: {
    src: '/hero/light-1024.webp',
    srcSet: '/hero/light-640.webp 640w, /hero/light-1024.webp 1024w, /hero/light-1600.webp 1600w',
  },
};

export const selectHeroImage = (theme: Theme): string => heroImageSources[theme].src;
export const selectHeroImageSet = (theme: Theme): string => heroImageSources[theme].srcSet;

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const image = heroImageSources[theme];

  return (
    <section id="home" className="flex min-h-screen items-center py-24 md:py-28 lg:py-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 text-center md:flex-row md:gap-12 md:px-6 md:text-left">
        <div className="w-full md:w-1/2 animate-fade-in-up">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-highlight sm:text-sm">C++ · Qt · AI/ML · Systems</p>
          <h1 className="text-4xl font-extralight leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 200, letterSpacing: '-0.02em' }}>
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-lg font-light tracking-tight text-accent sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.01em' }}>
            {t('hero.subtitle')}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm font-normal leading-relaxed text-gray-300 sm:mt-8 sm:text-base md:mx-0 md:text-lg" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400 }}>
            {t('hero.description')}
          </p>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-left sm:mt-10 sm:gap-4">
            {heroMetrics[language].map((metric) => (
              <div key={metric.label} className="border-l border-highlight/30 pl-3 sm:pl-4">
                <dt className="text-xl text-white sm:text-2xl" style={{ fontWeight: 500 }}>{metric.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-gray-400 sm:text-sm">{metric.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a href="#contact" className="inline-block rounded-full bg-highlight px-8 py-3 text-white shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-2xl sm:px-10 sm:py-4" style={{ fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, fontSize: '16px', letterSpacing: '-0.01em' }}>
              {t('hero.cta')}
            </a>
          </div>
        </div>
        <div className={`mt-2 w-full rounded-3xl border border-transparent p-4 shadow-2xl transition-all duration-500 sm:p-6 md:mt-0 md:w-1/2 ${theme === 'dark' ? 'border-highlight/10 bg-black/90' : 'bg-[var(--primary)] shadow-[0_8px_32px_rgba(226,208,136,0.25)]'}`}>
          <img
            key={theme}
            src={image.src}
            srcSet={image.srcSet}
            sizes="(max-width: 767px) 92vw, (max-width: 1279px) 48vw, 640px"
            alt="Hasan Hüseyin Yetkiner"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className={`hero-image mx-auto h-auto min-h-[360px] w-full max-w-md rounded-2xl object-contain shadow-xl sm:max-w-lg lg:max-w-xl xl:max-w-2xl ${theme === 'dark' ? 'bg-primary' : 'bg-[var(--primary)]'}`}
            style={theme === 'light' ? { opacity: 0.8 } : { objectPosition: 'center 30%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
