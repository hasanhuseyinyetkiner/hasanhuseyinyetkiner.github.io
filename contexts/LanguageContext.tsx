import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'it' | 'de';

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
    'about.p1': 'Elektrik-Elektronik ve Bilgisayar Mühendisliği çift anadal programını sadece üç yıl gibi kısa bir sürede başarıyla tamamlayan bir mühendisim. Mepsan için MES (Manufacturing Execution System) çözümü geliştirdim. Teknik uzmanlığım C++, Qt Framework ve makine öğrenimi (ML/AI) üzerine yoğunlaşmaktadır; YOLO, LSTM, GRU, ConvS2S, Seq2Seq ve zaman serisi tahminleme gibi gelişmiş modelleri kullanmaktayım.',
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
    
    // Skills Section
    'skills.technical': 'Teknik Yetenekler',
    'skills.personal': 'Kişisel Yetenekler',
    
    // Achievements
    'achievement.award.title': 'En İyi Çalışan Ödülü',
    'achievement.award.description': 'Millenicom\'da 196 çalışan arasında performansta birinci oldum.',
    'achievement.graduation.title': 'Hızlandırılmış Mezuniyet',
    'achievement.graduation.description': '4 yıl yerine 3 yılda çift anadal programını tamamladım.',
    'achievement.gimbal.title': 'Gimbal Arayüz Entegrasyonu',
    'achievement.gimbal.description': 'Baykar\'da Gimbal arayüzü için C++ ve Qt Framework\'ün entegre kullanımına katkıda bulundum.',
    'achievement.leadership.title': 'Teknik Destek Liderliği',
    'achievement.leadership.description': '1.000\'den fazla Millenicom müşterisi için teknik sorunları çözmek üzere bir ekibe liderlik ettim ve eğitim verdim.',
    
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
    'about.p1': 'I am an engineer who successfully completed a double major in Electrical-Electronics and Computer Engineering within just three years. I built a MES (Manufacturing Execution System) solution for Mepsan. My technical expertise centers on C++, the Qt Framework, and machine learning (ML/AI), including advanced models such as YOLO, LSTM, GRU, ConvS2S, Seq2Seq, and time series forecasting.',
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
    
    // Skills Section
    'skills.technical': 'Technical Skills',
    'skills.personal': 'Personal Skills',
    
    // Achievements
    'achievement.award.title': 'Best Employee Award',
    'achievement.award.description': 'Ranked first in performance among 196 employees at Millenicom.',
    'achievement.graduation.title': 'Accelerated Graduation',
    'achievement.graduation.description': 'Completed the double major program in 3 years instead of 4.',
    'achievement.gimbal.title': 'Gimbal Interface Integration',
    'achievement.gimbal.description': 'Contributed to the integrated use of C++ and the Qt Framework for the Gimbal interface at Baykar.',
    'achievement.leadership.title': 'Technical Support Leadership',
    'achievement.leadership.description': 'Led a team and provided training to resolve technical issues for more than 1,000 Millenicom customers.',
    
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
    'about.p1': 'Sono un ingegnere che ha completato con successo una doppia laurea in Ingegneria Elettrica-Elettronica e Informatica in soli tre anni. Ho realizzato una soluzione MES (Manufacturing Execution System) per Mepsan. La mia competenza tecnica si concentra su C++, Qt Framework e machine learning (ML/AI), includendo modelli avanzati come YOLO, LSTM, GRU, ConvS2S, Seq2Seq e previsioni di serie temporali.',
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
    
    // Skills Section
    'skills.technical': 'Competenze Tecniche',
    'skills.personal': 'Competenze Personali',
    
    // Achievements
    'achievement.award.title': 'Premio Miglior Dipendente',
    'achievement.award.description': 'Classificato primo nelle prestazioni tra 196 dipendenti presso Millenicom.',
    'achievement.graduation.title': 'Laurea Accelerata',
    'achievement.graduation.description': 'Completato il programma di doppia specializzazione in 3 anni invece di 4.',
    'achievement.gimbal.title': 'Integrazione Interfaccia Gimbal',
    'achievement.gimbal.description': 'Contribuito all\'uso integrato di C++ e del Qt Framework per l\'interfaccia Gimbal presso Baykar.',
    'achievement.leadership.title': 'Leadership nel Supporto Tecnico',
    'achievement.leadership.description': 'Guidato un team e fornito formazione per risolvere problemi tecnici per più di 1.000 clienti Millenicom.',
    
    // Footer
    'footer.rights': 'Tutti i Diritti Riservati.',
    'footer.tagline': 'Progettato e Sviluppato con Professionalità.',
  },
  de: {
    // Header
    'nav.summary': 'Zusammenfassung',
    'nav.experience': 'Erfahrung',
    'nav.education': 'Bildung',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Hasan Hüseyin Yetkiner',
    'hero.subtitle': 'Elektrotechnik- und Computeringenieur',
    'hero.description': 'Ein belastbarer und innovativer Ingenieur mit Expertise in C++, Qt Framework und KI/ML, leidenschaftlich daran interessiert, komplexe Herausforderungen an der Schnittstelle von fortschrittlicher Technik und künstlicher Intelligenz zu lösen.',
    'hero.cta': 'Kontakt aufnehmen',
    
    // About/Summary
    'about.title': 'Zusammenfassung',
    'about.p1': 'Ich bin ein Ingenieur, der erfolgreich ein Doppelstudium in Elektrotechnik-Elektronik und Informatik in nur drei Jahren abgeschlossen hat. Ich habe eine MES-Lösung (Manufacturing Execution System) für Mepsan entwickelt. Meine technische Expertise konzentriert sich auf C++, das Qt Framework und maschinelles Lernen (ML/KI), einschließlich fortgeschrittener Modelle wie YOLO, LSTM, GRU, ConvS2S, Seq2Seq und Zeitreihenprognosen.',
    'about.p2': 'Durch verschiedene Projekte in mehreren Unternehmen habe ich ein breites Spektrum an Fähigkeiten aufgebaut, das Sensorfusion, autonome Systeme, Flugbetrieb und Netzwerkmanagement umfasst. Ich bin von einer Leidenschaft für Effizienz, Innovation und Teamarbeit getrieben, und mein Karriereziel ist es, zu Projekten an der Schnittstelle von fortschrittlicher Technik und künstlicher Intelligenz beizutragen.',
    'about.p3': 'Darüber hinaus bringe ich praktisches Wissen über CMDB- und ITSM-Prozesse mit praktischer Erfahrung in der Integration und Implementierung von IT-Lösungen mit. Ich verfüge auch über fundierte Expertise in CRM- und SFA-Systemen, insbesondere im Kundenbeziehungsmanagement und der Vertriebsautomatisierung.',
    
    // Contact
    'contact.title': 'Lass uns in Kontakt treten',
    'contact.description': 'Ich bin immer offen für Gespräche über neue Projekte, kreative Ideen oder Möglichkeiten, Teil einer ehrgeizigen Vision zu sein.',
    'contact.cta': 'Senden Sie mir eine E-Mail',
    
    // Section Titles
    'sections.experience': 'Erfahrung',
    'sections.education': 'Bildung',
    'sections.projects': 'Projekte',
    'sections.skills': 'Fähigkeiten & Expertise',
    'sections.achievements': 'Wichtige Erfolge',
    
    // Skills Section
    'skills.technical': 'Technische Fähigkeiten',
    'skills.personal': 'Persönliche Fähigkeiten',
    
    // Achievements
    'achievement.award.title': 'Auszeichnung als bester Mitarbeiter',
    'achievement.award.description': 'Erster Platz in der Leistung unter 196 Mitarbeitern bei Millenicom.',
    'achievement.graduation.title': 'Beschleunigter Abschluss',
    'achievement.graduation.description': 'Das Doppelstudium in 3 Jahren statt 4 Jahren abgeschlossen.',
    'achievement.gimbal.title': 'Gimbal-Schnittstellen-Integration',
    'achievement.gimbal.description': 'Beitrag zur integrierten Nutzung von C++ und dem Qt Framework für die Gimbal-Schnittstelle bei Baykar.',
    'achievement.leadership.title': 'Leitung des technischen Supports',
    'achievement.leadership.description': 'Leitung eines Teams und Schulung zur Lösung technischer Probleme für mehr als 1.000 Millenicom-Kunden.',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.tagline': 'Mit Professionalität entworfen und entwickelt.',
  },
};;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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

// ### Module-Summary
// Dil bağlamını yönetir, çevirileri tutar, dil seçimlerini kaydeder ve
// komponentlerin t(key) üzerinden yerelleştirilmiş metin almasını sağlar.
