import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
