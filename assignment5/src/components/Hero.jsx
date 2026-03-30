import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '80px'
    }}>
      <div className="animate-fade-up">
        <div className="accent-line"></div>
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
          marginBottom: '1rem', 
          lineHeight: 0.9,
          maxWidth: '900px'
        }}>
          <span className="text-gradient">ENGINEERING</span><br />
          <span>DIGITAL EXCELLENCE.</span>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', 
          fontWeight: 500,
          color: 'var(--text-main)', 
          maxWidth: '800px', 
          margin: '2rem 0 1.5rem',
          letterSpacing: '-0.02em'
        }}>
          Oaj Bidnurkar — Software Engineer & Systems Architect.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          color: 'var(--text-muted)', 
          maxWidth: '600px', 
          margin: '0 0 3rem',
          lineHeight: 1.6
        }}>
          I develop high-performance systems and full-stack platforms with a focus on 
          scalability, clean architecture, and precision engineering.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#projects" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            PROJECTS
          </a>
          <button className="btn-outline" style={{ padding: '1rem 2.5rem' }} onClick={() => document.getElementById('contact').scrollIntoView()}>
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
