import React from 'react';

const Skills = () => {
  const skillGroups = [
    { name: 'Core Languages', items: ['Rust', 'C/C++', 'Go', 'TypeScript', 'JavaScript'] },
    { name: 'Architecture & Backend', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'] },
    { name: 'Frontend & UI', items: ['React', 'Next.js', 'WebGPU', 'Standard CSS', 'Framer Motion'] }
  ];

  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <h2 className="section-title">
        Technical <span className="text-gradient">Stack</span>
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {skillGroups.map((group, i) => (
          <div key={i} className="card">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)', opacity: 0.9 }}>
              {group.name}
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.6rem'
            }}>
              {group.items.map((skill, j) => (
                <span key={j} style={{ 
                  padding: '0.5rem 1rem', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'var(--border-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  color: 'var(--text-main)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
