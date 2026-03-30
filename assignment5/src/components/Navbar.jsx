import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <div style={{ 
          fontWeight: 800, 
          fontSize: '1.25rem', 
          fontFamily: 'var(--heading-font)',
          letterSpacing: '-0.05em' 
        }}>
          OAJ BIDNURKAR
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          alignItems: 'center',
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'var(--text-muted)'
        }}>
          <a href="#about" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>About</a>
          <a href="#projects" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Projects</a>
          <a href="#skills" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Skills</a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
