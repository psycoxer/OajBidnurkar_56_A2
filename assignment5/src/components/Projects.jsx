import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Bare-Metal OS', desc: 'A custom operating system built in C/C++ and Assembly, featuring a bespoke bootloader and memory management system.' },
    { title: '3D Graphics Engine', desc: 'A high-performance software renderer implemented from first principles, integrated into a bare-metal environment.' },
    { title: 'P2P BitTorrent Client', desc: 'A distributed networking client engineered for efficient piece exchange and swarm coordination across peer networks.' },
    { title: 'ClubHive Platform', desc: 'A comprehensive nightlife discovery and booking ecosystem with integrated payment gateways and administrative controls.' },
    { title: 'Goal Analysis System', desc: 'An enterprise-grade productivity suite featuring data-driven annual summaries and performance benchmarking.' },
    { title: 'Blockchain Wager Protocol', desc: 'A decentralized, smart-contract-based wagering infrastructure ensuring transparency and security on-chain.' },
  ];

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <h2 className="section-title">
        Selected <span className="text-gradient">Work</span>
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {projects.map((proj, i) => (
          <div key={i} className="card" style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ 
                height: '2px', 
                width: '30px', 
                background: 'var(--primary)', 
                marginBottom: '1.5rem' 
              }}></div>
              <h3 style={{ 
                marginBottom: '1rem', 
                fontSize: '1.35rem', 
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}>
                {proj.title}
              </h3>
              <p style={{ 
                color: 'var(--text-muted)', 
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}>
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
