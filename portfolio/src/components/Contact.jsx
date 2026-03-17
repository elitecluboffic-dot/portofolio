import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your actual form handler (e.g. Formspree, EmailJS, etc.)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const SOCIALS = [
    {
      label: 'GitHub',
      value: 'github.com/elitecluboffic-dot',
      href: 'https://github.com/elitecluboffic-dot',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: 'instagram.com/bustanullabibalwasi',
      href: 'https://www.instagram.com/bustanullabibalwasi',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'alwasilabib153@gmail.com',
      href: 'mailto:alwasilabib153@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-glow" />
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">// contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-sub">
            Have a project in mind? I'd love to hear about it.
            Drop me a message and let's build something great.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrap fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
                {status === 'sending' && <span className="sending-dots">Sending<span>...</span></span>}
                {status === 'sent' && '✓ Message Sent!'}
                {status === 'error' && 'Error — Try Again'}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="info-card">
              <h3 className="info-title">Get In Touch</h3>
              <p className="info-desc">
                I'm currently open to freelance projects and full-time opportunities.
                Response time is usually within 24 hours.
              </p>
              <div className="social-links">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} className="social-item" target="_blank" rel="noreferrer">
                    <span className="social-icon">{s.icon}</span>
                    <div className="social-text">
                      <span className="social-label">{s.label}</span>
                      <span className="social-value">{s.value}</span>
                    </div>
                    <svg className="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Currently Available</div>
                <div className="avail-sub">Open for freelance & full-time roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
