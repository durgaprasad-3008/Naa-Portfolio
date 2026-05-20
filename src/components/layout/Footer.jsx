import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-white/70">
      <p>© {new Date().getFullYear()} Durga Portfolio. Built with React and Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
