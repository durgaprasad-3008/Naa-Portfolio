import React from 'react';
import SectionTitle from '../common/SectionTitle';

const skills = ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];

const Skills = () => {
  return (
    <section id="skills" className="space-y-6 px-6 py-12 text-white">
      <SectionTitle subtitle="My Skills" title="What I Do" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-white/90">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
