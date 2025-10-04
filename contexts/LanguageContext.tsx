import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Header
    'nav.summary': 'Özet',
    'nav.experience': 'Deneyim',
    'nav.education': 'Eğitim',
    'nav.projects': 'Projeler',
    'nav.skills': 'Yetenekler',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.title': 'Hasan Hüseyin Yetkiner',
    'hero.subtitle': 'Elektrik-Elektronik ve Bilgisayar Mühendisi',
    'hero.description': 'C++, Qt Framework ve Yapay Zeka/Makine Öğrenimi konularında uzmanlığa sahip, ileri mühendislik ve yapay zekanın kesişimindeki karmaşık zorlukları çözme konusunda tutkulu, dayanıklı ve yenilikçi bir mühendis.',
    'hero.cta': 'İletişime Geç',
    
    // About/Summary
    'about.title': 'Özet',
    'about.p1': 'Elektrik-Elektronik ve Bilgisayar Mühendisliği çift anadal programını sadece üç yıl gibi kısa bir sürede başarıyla tamamlayan bir mühendisim. Adıyaman depreminde enkazın altında kalarak hayatta kalan biri olarak, güçlü bir dayanıklılık ve kriz yönetimi becerileri geliştirdim. Teknik uzmanlığım C++, Qt Framework ve makine öğrenimi (ML/AI) üzerine yoğunlaşmaktadır; YOLO, LSTM, GRU, ConvS2S, Seq2Seq ve zaman serisi tahminleme gibi gelişmiş modelleri kullanmaktayım.',
    'about.p2': 'Birden fazla şirkette çeşitli projeler üzerinde çalışarak, sensör füzyonu, otonom sistemler, uçuş operasyonları ve ağ yönetimi gibi geniş bir yetenek seti geliştirdim. Verimlilik, yenilikçilik ve takım çalışması konusunda tutkuluyum ve kariyer hedefim, ileri mühendislik ve yapay zekanın kesiştiği projelere katkıda bulunmaktır.',
    'about.p3': 'Ayrıca, CMDB ve ITSM süreçleri konusunda pratik bilgiye sahip olup, BT çözüm entegrasyonu ve uygulamasında uygulamalı deneyime sahibim. CRM ve SFA sistemlerinde, özellikle müşteri ilişkileri yönetimi ve satış otomasyonu konularında sağlam bir uzmanlığa sahibim.',
    
    // Contact
    'contact.title': 'İletişime Geçelim',
    'contact.description': 'Yeni projeler, yaratıcı fikirler veya iddialı bir vizyonun parçası olma fırsatları hakkında konuşmak için her zaman açığım.',
    'contact.cta': 'E-posta Gönder',
    
    // Section Titles
    'sections.experience': 'Deneyim',
    'sections.education': 'Eğitim',
    'sections.projects': 'Projeler',
    'sections.skills': 'Yetenekler ve Uzmanlık',
    'sections.achievements': 'Başlıca Başarılar',
    
    // Footer
    'footer.rights': 'Tüm Hakları Saklıdır.',
    'footer.tagline': 'Profesyonellikle Tasarlandı ve Geliştirildi.',
  },
  en: {
    // Header
    'nav.summary': 'Summary',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Hasan Hüseyin Yetkiner',
    'hero.subtitle': 'Electrical-Electronics & Computer Engineer',
    'hero.description': 'A resilient and innovative engineer with expertise in C++, Qt Framework, and AI/ML, passionate about solving complex challenges at the intersection of advanced engineering and artificial intelligence.',
    'hero.cta': 'Get In Touch',
    
    // About/Summary
    'about.title': 'Summary',
    'about.p1': 'I am an engineer who successfully completed a double major in Electrical-Electronics and Computer Engineering within just three years. As a survivor of the Adıyaman earthquake, where I was trapped under the rubble, I developed strong resilience and crisis management skills. My technical expertise centers on C++, the Qt Framework, and machine learning (ML/AI), including advanced models such as YOLO, LSTM, GRU, ConvS2S, Seq2Seq, and time series forecasting.',
    'about.p2': 'Through diverse projects across multiple companies, I have built a broad skill set spanning sensor fusion, autonomous systems, flight operations, and network management. I am driven by a passion for efficiency, innovation, and teamwork, and my career goal is to contribute to projects at the intersection of advanced engineering and artificial intelligence.',
    'about.p3': 'In addition, I bring practical knowledge of CMDB and ITSM processes, with hands-on experience in IT solution integration and implementation. I also possess solid expertise in CRM and SFA systems, particularly in customer relationship management and sales automation.',
    
    // Contact
    'contact.title': 'Let\'s Connect',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.',
    'contact.cta': 'Send me an Email',
    
    // Section Titles
    'sections.experience': 'Experience',
    'sections.education': 'Education',
    'sections.projects': 'Projects',
    'sections.skills': 'Skills & Expertise',
    'sections.achievements': 'Key Achievements',
    
    // Footer
    'footer.rights': 'All Rights Reserved.',
    'footer.tagline': 'Designed & Built with Professionalism.',
  },
  it: {
    // Header
    'nav.summary': 'Riepilogo',
    'nav.experience': 'Esperienza',
    'nav.education': 'Istruzione',
    'nav.projects': 'Progetti',
    'nav.skills': 'Competenze',
    'nav.contact': 'Contatto',
    
    // Hero
    'hero.title': 'Hasan Hüseyin Yetkiner',
    'hero.subtitle': 'Ingegnere Elettrico-Elettronico e Informatico',
    'hero.description': 'Un ingegnere resiliente e innovativo con competenze in C++, Qt Framework e AI/ML, appassionato di risolvere sfide complesse all\'intersezione tra ingegneria avanzata e intelligenza artificiale.',
    'hero.cta': 'Contattami',
    
    // About/Summary
    'about.title': 'Riepilogo',
    'about.p1': 'Sono un ingegnere che ha completato con successo una doppia laurea in Ingegneria Elettrica-Elettronica e Informatica in soli tre anni. Come sopravvissuto al terremoto di Adıyaman, dove sono rimasto intrappolato sotto le macerie, ho sviluppato una forte resilienza e competenze nella gestione delle crisi. La mia competenza tecnica si concentra su C++, Qt Framework e machine learning (ML/AI), includendo modelli avanzati come YOLO, LSTM, GRU, ConvS2S, Seq2Seq e previsioni di serie temporali.',
    'about.p2': 'Attraverso diversi progetti in molteplici aziende, ho costruito un ampio set di competenze che spaziano dalla fusione di sensori, sistemi autonomi, operazioni di volo e gestione di rete. Sono guidato da una passione per l\'efficienza, l\'innovazione e il lavoro di squadra, e il mio obiettivo di carriera è contribuire a progetti all\'intersezione tra ingegneria avanzata e intelligenza artificiale.',
    'about.p3': 'Inoltre, possiedo conoscenze pratiche dei processi CMDB e ITSM, con esperienza pratica nell\'integrazione e implementazione di soluzioni IT. Possiedo anche solide competenze nei sistemi CRM e SFA, in particolare nella gestione delle relazioni con i clienti e nell\'automazione delle vendite.',
    
    // Contact
    'contact.title': 'Connettiamoci',
    'contact.description': 'Sono sempre disponibile per discutere nuovi progetti, idee creative o opportunità di far parte di una visione ambiziosa.',
    'contact.cta': 'Inviami una Email',
    
    // Section Titles
    'sections.experience': 'Esperienza',
    'sections.education': 'Istruzione',
    'sections.projects': 'Progetti',
    'sections.skills': 'Competenze e Specializzazioni',
    'sections.achievements': 'Principali Risultati',
    
    // Footer
    'footer.rights': 'Tutti i Diritti Riservati.',
    'footer.tagline': 'Progettato e Sviluppato con Professionalità.',
  },
};;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
