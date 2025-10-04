import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="summary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-light text-white mb-8 leading-tighter tracking-tighter">Summary</h2>
        <div className="text-left space-y-4 text-lg leading-relaxed">
          <p>
            I am an engineer who successfully completed a double major in Electrical-Electronics and Computer Engineering within just three years. As a survivor of the Adıyaman earthquake, where I was trapped under the rubble, I developed strong resilience and crisis management skills. My technical expertise centers on C++, the Qt Framework, and machine learning (ML/AI), including advanced models such as YOLO, LSTM, GRU, ConvS2S, Seq2Seq, and time series forecasting.
          </p>
          <p>
            Through diverse projects across multiple companies, I have built a broad skill set spanning sensor fusion, autonomous systems, flight operations, and network management. I am driven by a passion for efficiency, innovation, and teamwork, and my career goal is to contribute to projects at the intersection of advanced engineering and artificial intelligence.
          </p>
          <p>
             In addition, I bring practical knowledge of CMDB and ITSM processes, with hands-on experience in IT solution integration and implementation. I also possess solid expertise in CRM and SFA systems, particularly in customer relationship management and sales automation.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;