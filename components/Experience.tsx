import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const getExperienceData = (language: string) => {
  const data = {
    en: [
      {
        role: 'Full Stack Developer',
        company: 'Mepsan',
        period: '04/2025 - Present',
        description: [
          'Developed communication software for smart pump systems using Qt/C++ in Linaro, RS485, and Ubuntu environments.',
          'Designed performance-oriented, multi-protocol interface software compatible with devices from different manufacturers for factory personnel tracking.',
          'Built scalable backend services and RESTful API integrations using Node.js, Express.js, and Socket.io.',
          'Established data processing infrastructures based on PostgreSQL and Vector Databases, ensuring uninterrupted data flow.',
          'Integrated machine learning and deep learning algorithms such as YOLO, LSTM, and GRU to develop image processing-based decision-making mechanisms.',
          'Gained extensive experience in big data processing, time series analysis, and system architecture.',
        ]
      },
      {
        role: 'C++ Qt Developer',
        company: 'Baykar Technologies',
        period: '09/2024 - 12/2024',
        description: [
          'Contributed to user interface (UI) development projects for the Gimbal system developed for the Bayraktar TB2, using C++ and the Qt Framework.',
          'Designed the infrastructure for real-time image processing, data streaming, and video broadcasting using QML, GStreamer, OpenCV, and FFmpeg.',
          'Developed comprehensive interfaces including TCP, UDP, and serial communication protocols, ensuring stable and high-speed data transmission.',
          'Enhanced my advanced C++/Qt skills and achieved significant improvements in efficiency.',
        ]
      },
      {
        role: 'Aircraft Operations Officer',
        company: 'Turkish Airlines',
        period: '09/2023 - 06/2024',
        description: [
          'Participated in planning and coordination of operational activities such as fuel calculation, cargo unloading, and passenger transfer.',
          'Performed risk analyses and ensured real-time data monitoring to improve flight safety and operational efficiency.',
          'Through team-based optimization efforts, reduced the average waiting time in flight operations by 2% and achieved a 3% increase in overall operational efficiency.',
        ]
      },
      {
        role: 'Lidar & ROS Researcher',
        company: 'Aselsan',
        period: '06/2023 - 08/2023',
        description: [
          'As an intern, worked on ALTAY Tank projects using the Robot Operating System (ROS) with tools such as Gazebo and Rviz on Ubuntu.',
          'Gained experience in high-accuracy mapping and localization by processing data from LIDAR sensors.',
          'Through my optimizations, achieved a 100% time saving in sensor data processing.',
        ]
      },
      {
        role: 'IT Specialist',
        company: 'Millenicom',
        period: '09/2020 - 08/2022',
        description: [
          'Selected as the top performer among 196 employees and received four promotions.',
          'Provided training on network infrastructure and troubleshooting (TCP/IP, DSLAM, modem, router, switch).',
          'Managed technical support records through CRM systems and delivered usage training.',
          'Shared knowledge on ITSM processes and CMDB configuration in internal training sessions for technical staff.',
        ]
      }
    ],
    tr: [
      {
        role: 'Full Stack Geliştirici',
        company: 'Mepsan',
        period: '04/2025 - Devam Ediyor',
        description: [
          'Linaro, RS485 ve Ubuntu ortamlarında Qt/C++ kullanarak akıllı pompa sistemleri için iletişim yazılımı geliştirdim.',
          'Fabrika personel takibi için farklı üreticilerin cihazlarıyla uyumlu, performans odaklı, çok protokollü arayüz yazılımı tasarladım.',
          'Node.js, Express.js ve Socket.io kullanarak ölçeklenebilir backend servisleri ve RESTful API entegrasyonları oluşturdum.',
          'PostgreSQL ve Vektör Veritabanları tabanlı veri işleme altyapıları kurdum, kesintisiz veri akışı sağladım.',
          'YOLO, LSTM ve GRU gibi makine öğrenimi ve derin öğrenme algoritmalarını entegre ederek görüntü işleme tabanlı karar verme mekanizmaları geliştirdim.',
          'Büyük veri işleme, zaman serisi analizi ve sistem mimarisi konularında kapsamlı deneyim kazandım.',
        ]
      },
      {
        role: 'C++ Qt Geliştirici',
        company: 'Baykar Teknoloji',
        period: '09/2024 - 12/2024',
        description: [
          'Bayraktar TB2 için geliştirilen Gimbal sistemi için C++ ve Qt Framework kullanarak kullanıcı arayüzü (UI) geliştirme projelerine katkıda bulundum.',
          'QML, GStreamer, OpenCV ve FFmpeg kullanarak gerçek zamanlı görüntü işleme, veri akışı ve video yayını için altyapı tasarladım.',
          'TCP, UDP ve seri iletişim protokolleri dahil kapsamlı arayüzler geliştirdim, kararlı ve yüksek hızlı veri iletimi sağladım.',
          'İleri düzey C++/Qt becerilerimi geliştirdim ve verimlilik konusunda önemli iyileştirmeler sağladım.',
        ]
      },
      {
        role: 'Uçak Operasyon Sorumlusu',
        company: 'Türk Hava Yolları',
        period: '09/2023 - 06/2024',
        description: [
          'Yakıt hesaplama, kargo boşaltma ve yolcu transferi gibi operasyonel faaliyetlerin planlanması ve koordinasyonuna katıldım.',
          'Risk analizleri gerçekleştirdim ve uçuş güvenliğini ve operasyonel verimliliği artırmak için gerçek zamanlı veri izleme sağladım.',
          'Ekip tabanlı optimizasyon çalışmaları ile uçuş operasyonlarındaki ortalama bekleme süresini %2 azalttım ve genel operasyonel verimlilikte %3 artış sağladım.',
        ]
      },
      {
        role: 'Lidar & ROS Araştırmacısı',
        company: 'Aselsan',
        period: '06/2023 - 08/2023',
        description: [
          'Stajyer olarak, Ubuntu üzerinde Gazebo ve Rviz gibi araçlarla Robot İşletim Sistemi (ROS) kullanarak ALTAY Tank projeleri üzerinde çalıştım.',
          'LIDAR sensörlerinden gelen verileri işleyerek yüksek doğrulukta haritalama ve lokalizasyon deneyimi kazandım.',
          'Optimizasyonlarım sayesinde sensör veri işlemede %100 zaman tasarrufu sağladım.',
        ]
      },
      {
        role: 'BT Uzmanı',
        company: 'Millenicom',
        period: '09/2020 - 08/2022',
        description: [
          '196 çalışan arasında en iyi performans gösteren kişi seçildim ve dört terfi aldım.',
          'Ağ altyapısı ve sorun giderme (TCP/IP, DSLAM, modem, router, switch) konularında eğitim verdim.',
          'CRM sistemleri aracılığıyla teknik destek kayıtlarını yönettim ve kullanım eğitimleri verdim.',
          'Teknik personel için iç eğitim oturumlarında ITSM süreçleri ve CMDB yapılandırması hakkında bilgi paylaştım.',
        ]
      }
    ],
    it: [
      {
        role: 'Sviluppatore Full Stack',
        company: 'Mepsan',
        period: '04/2025 - Presente',
        description: [
          'Sviluppato software di comunicazione per sistemi di pompe intelligenti utilizzando Qt/C++ in ambienti Linaro, RS485 e Ubuntu.',
          'Progettato software di interfaccia multi-protocollo orientato alle prestazioni compatibile con dispositivi di diversi produttori per il monitoraggio del personale di fabbrica.',
          'Costruito servizi backend scalabili e integrazioni API RESTful utilizzando Node.js, Express.js e Socket.io.',
          'Stabilito infrastrutture di elaborazione dati basate su PostgreSQL e Database Vettoriali, garantendo un flusso di dati ininterrotto.',
          'Integrato algoritmi di machine learning e deep learning come YOLO, LSTM e GRU per sviluppare meccanismi decisionali basati sull\'elaborazione delle immagini.',
          'Acquisito ampia esperienza nell\'elaborazione di big data, analisi delle serie temporali e architettura di sistema.',
        ]
      },
      {
        role: 'Sviluppatore C++ Qt',
        company: 'Baykar Technologies',
        period: '09/2024 - 12/2024',
        description: [
          'Contribuito a progetti di sviluppo dell\'interfaccia utente (UI) per il sistema Gimbal sviluppato per il Bayraktar TB2, utilizzando C++ e Qt Framework.',
          'Progettato l\'infrastruttura per l\'elaborazione delle immagini in tempo reale, lo streaming dei dati e la trasmissione video utilizzando QML, GStreamer, OpenCV e FFmpeg.',
          'Sviluppato interfacce complete inclusi i protocolli di comunicazione TCP, UDP e seriale, garantendo una trasmissione dati stabile e ad alta velocità.',
          'Migliorato le mie competenze avanzate in C++/Qt e ottenuto miglioramenti significativi in termini di efficienza.',
        ]
      },
      {
        role: 'Ufficiale Operazioni Aeree',
        company: 'Turkish Airlines',
        period: '09/2023 - 06/2024',
        description: [
          'Partecipato alla pianificazione e coordinamento delle attività operative come calcolo del carburante, scarico merci e trasferimento passeggeri.',
          'Eseguito analisi dei rischi e garantito il monitoraggio dei dati in tempo reale per migliorare la sicurezza del volo e l\'efficienza operativa.',
          'Attraverso sforzi di ottimizzazione basati sul team, ridotto il tempo di attesa medio nelle operazioni di volo del 2% e ottenuto un aumento del 3% nell\'efficienza operativa complessiva.',
        ]
      },
      {
        role: 'Ricercatore Lidar & ROS',
        company: 'Aselsan',
        period: '06/2023 - 08/2023',
        description: [
          'Come stagista, lavorato su progetti di carri armati ALTAY utilizzando il Robot Operating System (ROS) con strumenti come Gazebo e Rviz su Ubuntu.',
          'Acquisito esperienza nella mappatura ad alta precisione e nella localizzazione elaborando dati da sensori LIDAR.',
          'Attraverso le mie ottimizzazioni, ottenuto un risparmio di tempo del 100% nell\'elaborazione dei dati dei sensori.',
        ]
      },
      {
        role: 'Specialista IT',
        company: 'Millenicom',
        period: '09/2020 - 08/2022',
        description: [
          'Selezionato come miglior performer tra 196 dipendenti e ricevuto quattro promozioni.',
          'Fornito formazione sull\'infrastruttura di rete e risoluzione dei problemi (TCP/IP, DSLAM, modem, router, switch).',
          'Gestito i registri di supporto tecnico tramite sistemi CRM e fornito formazione sull\'utilizzo.',
          'Condiviso conoscenze sui processi ITSM e sulla configurazione CMDB in sessioni di formazione interna per il personale tecnico.',
        ]
      }
    ]
  };
  
  return data[language as keyof typeof data] || data.en;
};

const ExperienceItem: React.FC<any> = ({ role, company, period, description }) => (
  <div className="relative pl-8 pb-12 border-l border-highlight/20 last:pb-0">
    <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] bg-highlight rounded-full"></div>
    <p className="text-sm text-gray-500 mb-2" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400, letterSpacing: '-0.01em'}}>
      {period}
    </p>
    <h3 className="text-xl md:text-2xl text-white mb-1" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 500, letterSpacing: '-0.01em'}}>
      {role}
    </h3>
    <p className="text-base text-accent mb-4" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
      {company}
    </p>
    <div className="space-y-2">
      {description.map((point: string, index: number) => (
        <p key={index} className="text-gray-400 leading-relaxed text-sm md:text-base flex items-start" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          <span className="text-highlight mr-3 mt-1.5 flex-shrink-0">•</span>
          <span>{point}</span>
        </p>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const experienceData = getExperienceData(language);
  
  return (
    <AnimatedSection id="experience">
      <h2 className="text-4xl md:text-5xl font-light text-center text-white mb-16 leading-tight" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 300, letterSpacing: '-0.02em'}}>
        {t('sections.experience')}
      </h2>
      <div className="max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
