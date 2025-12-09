import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { TrophyIcon, AcademicCapIcon, BriefcaseIcon, UsersIcon } from './Icons';

// SUMMARY: Tema duyarlı başarı kartı; ikon, başlık ve açıklamayı gösterir.
const AchievementCard: React.FC<{ icon: React.ReactNode; titleKey: string; descriptionKey: string }> = ({ icon, titleKey, descriptionKey }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const cardClasses = isDark
    ? 'bg-secondary/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-highlight/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center shadow-xl/30'
    : 'bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-[#d4c070]/60 hover:border-highlight/60 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center shadow-[0_12px_45px_-20px_rgba(0,0,0,0.35)]';

  const titleClass = isDark ? 'text-white' : 'text-[#2b1d14]';
  const descriptionClass = isDark ? 'text-gray-400' : 'text-[#4b342d]';
  
  return (
    <div className={cardClasses}>
      <div className="text-highlight mb-4">{icon}</div>
      <h3 className={`text-lg md:text-xl mb-3 ${titleClass}`} style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em'}}>
        {t(titleKey)}
      </h3>
      <p className={`text-sm leading-relaxed ${descriptionClass}`} style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
        {t(descriptionKey)}
      </p>
    </div>
  );
};

// SUMMARY: Başarı listesini animasyonlu bölümde dört kolonlu grid olarak sunar.
const KeyAchievements: React.FC = () => {
  const { t } = useLanguage();
  
  const achievements = [
    {
      icon: <TrophyIcon />,
      titleKey: 'achievement.award.title',
      descriptionKey: 'achievement.award.description',
    },
    {
      icon: <AcademicCapIcon />,
      titleKey: 'achievement.graduation.title',
      descriptionKey: 'achievement.graduation.description',
    },
    {
      icon: <BriefcaseIcon />,
      titleKey: 'achievement.gimbal.title',
      descriptionKey: 'achievement.gimbal.description',
    },
    {
      icon: <UsersIcon />,
      titleKey: 'achievement.leadership.title',
      descriptionKey: 'achievement.leadership.description',
    },
  ];
  
  return (
    <AnimatedSection id="achievements">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.achievements')}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default KeyAchievements;

// ### Module-Summary
// Achievements bölümü, tema duyarlı kartlarla ödül ve başarıları çok dilli
// olarak listeler; ışık ve koyu tema için arka plan, kenarlık ve metin
// kontrastı optimize edilmiştir.
