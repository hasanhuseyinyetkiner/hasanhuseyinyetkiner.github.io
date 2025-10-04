import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const experienceData = [
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
];

const ExperienceItem: React.FC<(typeof experienceData)[0]> = ({ role, company, period, description }) => (
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
      {description.map((point, index) => (
        <p key={index} className="text-gray-400 leading-relaxed text-sm md:text-base flex items-start" style={{fontFamily: "'PP Editorial New', 'The Seasons', system-ui, sans-serif", fontWeight: 400}}>
          <span className="text-highlight mr-3 mt-1.5 flex-shrink-0">•</span>
          <span>{point}</span>
        </p>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  const { t } = useLanguage();
  
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
