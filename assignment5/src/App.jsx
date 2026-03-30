import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ 
        padding: '80px 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        marginTop: '100px',
        background: 'var(--border-muted)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="mailto:youremail@example.com" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>EMAIL</a>
            <a href="#" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>GITHUB</a>
            <a href="#" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>LINKEDIN</a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
            © 2026 OAJ BIDNURKAR. ENGINEERED FOR PERFORMANCE.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
