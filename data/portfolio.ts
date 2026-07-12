import { Language } from '../contexts/LanguageContext';

export interface ProjectCaseStudyContent {
  title: string;
  summary: string;
  problem: string;
  approach: string;
  technologies: string[];
  status: string;
  detailsLabel: string;
  closeLabel: string;
}

export interface ProjectCaseStudy {
  id: 'herd-management' | 'mini-soccer' | 'plant-classification' | 'breast-cancer-detection';
  externalUrl?: string;
  content: Record<Language, ProjectCaseStudyContent>;
}

export const heroMetrics: Record<Language, Array<{ value: string; label: string }>> = {
  tr: [
    { value: '3 yıl', label: 'çift anadal' },
    { value: '#1 / 196', label: 'performans sıralaması' },
    { value: '4', label: 'kariyer terfisi' },
  ],
  en: [
    { value: '3 years', label: 'double major' },
    { value: '#1 / 196', label: 'performance ranking' },
    { value: '4', label: 'career promotions' },
  ],
  it: [
    { value: '3 anni', label: 'doppia laurea' },
    { value: '#1 / 196', label: 'classifica prestazioni' },
    { value: '4', label: 'promozioni' },
  ],
  de: [
    { value: '3 Jahre', label: 'Doppelstudium' },
    { value: '#1 / 196', label: 'Leistungsrang' },
    { value: '4', label: 'Beförderungen' },
  ],
};

export const caseStudyLabels: Record<Language, { eyebrow: string; problem: string; approach: string; technology: string; status: string }> = {
  tr: { eyebrow: 'Seçilmiş çalışmalar', problem: 'Problem', approach: 'Yaklaşım', technology: 'Teknolojiler', status: 'Durum' },
  en: { eyebrow: 'Selected work', problem: 'Problem', approach: 'Approach', technology: 'Technologies', status: 'Status' },
  it: { eyebrow: 'Lavori selezionati', problem: 'Problema', approach: 'Approccio', technology: 'Tecnologie', status: 'Stato' },
  de: { eyebrow: 'Ausgewählte Arbeiten', problem: 'Problem', approach: 'Ansatz', technology: 'Technologien', status: 'Status' },
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'herd-management',
    content: {
      tr: { title: 'Yapay Zeka Destekli Sürü Yönetim Sistemi', summary: 'Saha verisini karar destek mekanizmalarıyla birleştiren, ölçeklenebilir bir hayvancılık platformu.', problem: 'Parçalı saha verisini, operasyon ekiplerinin kullanabileceği anlamlı içgörülere dönüştürmek.', approach: 'Flutter istemcisi, REST API, PostgreSQL ve vektör veritabanını; YOLO, LSTM ve GRU tabanlı analiz katmanlarıyla bir araya getirmek.', technologies: ['Flutter', 'REST API', 'PostgreSQL', 'Vector DB', 'YOLO', 'LSTM', 'GRU'], status: 'Devam ediyor', detailsLabel: 'Case study aç', closeLabel: 'Case study kapat' },
      en: { title: 'AI-powered Herd Management System', summary: 'A scalable livestock platform that connects field data to decision-support workflows.', problem: 'Turn fragmented field data into usable insight for operational teams.', approach: 'Combine a Flutter client, REST API, PostgreSQL and vector database with YOLO, LSTM and GRU analysis layers.', technologies: ['Flutter', 'REST API', 'PostgreSQL', 'Vector DB', 'YOLO', 'LSTM', 'GRU'], status: 'Ongoing', detailsLabel: 'Open case study', closeLabel: 'Close case study' },
      it: { title: 'Sistema di gestione della mandria con IA', summary: 'Una piattaforma zootecnica scalabile che collega i dati sul campo ai flussi decisionali.', problem: 'Trasformare dati sul campo frammentati in informazioni utili per i team operativi.', approach: 'Integrare client Flutter, API REST, PostgreSQL e database vettoriale con livelli di analisi YOLO, LSTM e GRU.', technologies: ['Flutter', 'REST API', 'PostgreSQL', 'Vector DB', 'YOLO', 'LSTM', 'GRU'], status: 'In corso', detailsLabel: 'Apri case study', closeLabel: 'Chiudi case study' },
      de: { title: 'KI-gestütztes Herdenmanagement', summary: 'Eine skalierbare Plattform, die Felddaten mit Entscheidungsprozessen verbindet.', problem: 'Fragmentierte Felddaten in nutzbare Erkenntnisse für Betriebsteams überführen.', approach: 'Flutter-Client, REST-API, PostgreSQL und Vektordatenbank mit YOLO-, LSTM- und GRU-Analyseebenen kombinieren.', technologies: ['Flutter', 'REST API', 'PostgreSQL', 'Vector DB', 'YOLO', 'LSTM', 'GRU'], status: 'Laufend', detailsLabel: 'Case Study öffnen', closeLabel: 'Case Study schließen' },
    },
  },
  {
    id: 'mini-soccer',
    content: {
      tr: { title: 'Mini Futbol Mobil Uygulaması', summary: 'Halısaha rezervasyonu için tasarlanmış mobil ürün deneyimi.', problem: 'Saha rezervasyonunu kullanıcılar ve işletmeler için daha erişilebilir hâle getirmek.', approach: 'FlutterFlow ile mobil rezervasyon akışını prototipleyip uygulama deneyimini uçtan uca tasarlamak.', technologies: ['FlutterFlow', 'Mobile UX', 'Booking Flow'], status: 'Tamamlandı', detailsLabel: 'Case study aç', closeLabel: 'Case study kapat' },
      en: { title: 'Mini Soccer Mobile App', summary: 'A mobile product experience designed for football-field bookings.', problem: 'Make field reservations more accessible for players and venue operators.', approach: 'Prototype and design the end-to-end mobile booking flow with FlutterFlow.', technologies: ['FlutterFlow', 'Mobile UX', 'Booking Flow'], status: 'Completed', detailsLabel: 'Open case study', closeLabel: 'Close case study' },
      it: { title: 'App mobile per calcetto', summary: "Un'esperienza mobile progettata per le prenotazioni dei campi da calcio.", problem: 'Rendere la prenotazione dei campi più accessibile a giocatori e gestori.', approach: 'Prototipare e progettare il flusso di prenotazione mobile end-to-end con FlutterFlow.', technologies: ['FlutterFlow', 'Mobile UX', 'Booking Flow'], status: 'Completato', detailsLabel: 'Apri case study', closeLabel: 'Chiudi case study' },
      de: { title: 'Mini-Fußball-App', summary: 'Eine mobile Produkterfahrung für die Reservierung von Fußballplätzen.', problem: 'Platzreservierungen für Spieler und Betreiber zugänglicher machen.', approach: 'Den mobilen Buchungsablauf mit FlutterFlow als durchgängige Erfahrung prototypisieren und gestalten.', technologies: ['FlutterFlow', 'Mobile UX', 'Booking Flow'], status: 'Abgeschlossen', detailsLabel: 'Case Study öffnen', closeLabel: 'Case Study schließen' },
    },
  },
  {
    id: 'plant-classification',
    content: {
      tr: { title: 'Bitki Sınıflandırma', summary: 'İki derin öğrenme yaklaşımını bitki sınıflandırma problemi üzerinde karşılaştıran çalışma.', problem: 'Görüntü tabanlı sınıflandırma için uygun model yaklaşımını değerlendirmek.', approach: 'İki derin öğrenme modelini aynı problem alanında geliştirip performanslarını karşılaştırmak.', technologies: ['Python', 'Deep Learning', 'Computer Vision'], status: 'Tamamlandı', detailsLabel: 'Case study aç', closeLabel: 'Case study kapat' },
      en: { title: 'Plant Classification', summary: 'A comparison of two deep-learning approaches for plant classification.', problem: 'Evaluate suitable model approaches for image-based classification.', approach: 'Develop two deep-learning models for the same problem space and compare their performance.', technologies: ['Python', 'Deep Learning', 'Computer Vision'], status: 'Completed', detailsLabel: 'Open case study', closeLabel: 'Close case study' },
      it: { title: 'Classificazione delle piante', summary: 'Un confronto tra due approcci di deep learning per la classificazione delle piante.', problem: 'Valutare approcci di modello idonei per la classificazione basata su immagini.', approach: 'Sviluppare due modelli di deep learning per lo stesso problema e confrontarne le prestazioni.', technologies: ['Python', 'Deep Learning', 'Computer Vision'], status: 'Completato', detailsLabel: 'Apri case study', closeLabel: 'Chiudi case study' },
      de: { title: 'Pflanzenklassifikation', summary: 'Ein Vergleich zweier Deep-Learning-Ansätze zur Pflanzenklassifikation.', problem: 'Geeignete Modellansätze für bildbasierte Klassifikation bewerten.', approach: 'Zwei Deep-Learning-Modelle für denselben Problemraum entwickeln und ihre Leistung vergleichen.', technologies: ['Python', 'Deep Learning', 'Computer Vision'], status: 'Abgeschlossen', detailsLabel: 'Case Study öffnen', closeLabel: 'Case Study schließen' },
    },
  },
  {
    id: 'breast-cancer-detection',
    content: {
      tr: { title: 'Meme Kanseri Tespiti', summary: 'Mamografi görüntülerinden derin öğrenme ile karar desteği üreten araştırma projesi.', problem: 'Mamografi görüntülerinden anlamlı sınıflandırma sinyalleri elde etmek.', approach: 'Meme kanseri tespiti için iki derin öğrenme modelini tasarlayıp görüntü verisi üzerinde değerlendirmek.', technologies: ['Python', 'Deep Learning', 'Mammography', 'Computer Vision'], status: 'Tamamlandı', detailsLabel: 'Case study aç', closeLabel: 'Case study kapat' },
      en: { title: 'Breast Cancer Detection', summary: 'A research project using deep learning to support decisions from mammography images.', problem: 'Extract meaningful classification signals from mammography images.', approach: 'Design and evaluate two deep-learning models for breast-cancer detection on image data.', technologies: ['Python', 'Deep Learning', 'Mammography', 'Computer Vision'], status: 'Completed', detailsLabel: 'Open case study', closeLabel: 'Close case study' },
      it: { title: 'Rilevamento del tumore al seno', summary: 'Un progetto di ricerca che usa il deep learning per supportare decisioni da immagini mammografiche.', problem: 'Estrarre segnali di classificazione significativi dalle immagini mammografiche.', approach: 'Progettare e valutare due modelli di deep learning per il rilevamento del tumore al seno su dati di immagine.', technologies: ['Python', 'Deep Learning', 'Mammography', 'Computer Vision'], status: 'Completato', detailsLabel: 'Apri case study', closeLabel: 'Chiudi case study' },
      de: { title: 'Brustkrebserkennung', summary: 'Ein Forschungsprojekt, das Deep Learning zur Entscheidungsunterstützung aus Mammografieaufnahmen nutzt.', problem: 'Aussagekräftige Klassifikationssignale aus Mammografieaufnahmen extrahieren.', approach: 'Zwei Deep-Learning-Modelle zur Brustkrebserkennung auf Bilddaten entwickeln und bewerten.', technologies: ['Python', 'Deep Learning', 'Mammography', 'Computer Vision'], status: 'Abgeschlossen', detailsLabel: 'Case Study öffnen', closeLabel: 'Case Study schließen' },
    },
  },
];
