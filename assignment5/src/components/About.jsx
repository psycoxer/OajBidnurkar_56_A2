import React from 'react';

const About = () => {
  const competencies = [
    { title: 'Systems Architecture', desc: 'Designing robust, scalable infrastructures using modern paradigms.' },
    { title: 'Full-Stack Performance', desc: 'Optimizing every layer of the stack for speed and efficiency.' },
    { title: 'Clean Engineering', desc: 'Writing maintainable, precision-focused code that stands the test of time.' }
  ];

  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h2 className="section-title">
            <span className="text-gradient">The Philosophy</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: 500 }}>
            Engineering is more than just code; it's about solving complex problems with elegant, efficient solutions.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            I specialize in bridging the gap between high-level business requirements and low-level technical implementation. 
            From bare-metal systems to distributed cloud platforms, my focus is always on reliability, performance, and 
            architectural integrity.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.25rem' }}>4+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Coding</div>
            </div>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.25rem' }}>10+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Projects</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {competencies.map((comp, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{comp.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{comp.desc}</p>
            </div>
          ))}
          
          <div className="card" style={{ padding: '1.5rem', borderStyle: 'dashed', background: 'transparent' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interests</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['Astronomy', 'Motorcycle Touring', 'Culinary Arts', 'Trekking', 'Distributed Systems'].map((interest, i) => (
                <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-main)', background: 'var(--border)', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
