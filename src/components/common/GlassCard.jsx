import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-lg shadow-black/10 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
