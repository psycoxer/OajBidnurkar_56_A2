import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-muted)', 
          marginBottom: '3rem',
          fontSize: '1rem' 
        }}>
          Interested in collaboration or have a technical challenge? Drop a message below and I'll get back to you.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Name</label>
              <input 
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  background: 'var(--border-muted)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '6px', 
                  color: 'white',
                  outline: 'none'
                }} 
                placeholder="Ex. John Doe"
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Email</label>
              <input 
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  background: 'var(--border-muted)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '6px', 
                  color: 'white',
                  outline: 'none'
                }} 
                placeholder="Ex. john@example.com" 
                type="email"
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Message</label>
            <textarea 
              rows="6" 
              style={{ 
                width: '100%', 
                padding: '1rem', 
                background: 'var(--border-muted)', 
                border: '1px solid var(--border)', 
                borderRadius: '6px', 
                color: 'white',
                outline: 'none',
                resize: 'vertical'
              }} 
              placeholder="How can I help you?"
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            ></textarea>
          </div>
          <button className="btn-primary" style={{ padding: '1.25rem', width: '100%', marginTop: '1rem' }}>
            INITIATE MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
