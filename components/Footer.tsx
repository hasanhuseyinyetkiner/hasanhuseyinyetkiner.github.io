
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {currentYear} Hasan Hüseyin Yetkiner. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with Professionalism.</p>
      </div>
    </footer>
  );
};

export default Footer;