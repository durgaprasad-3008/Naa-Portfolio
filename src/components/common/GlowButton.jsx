import React from 'react';

const GlowButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-white shadow-[0_0_30px_rgba(56,189,248,0.5)] transition hover:scale-[1.02] ${className}`}>
      {children}
    </button>
  );
};

export default GlowButton;
