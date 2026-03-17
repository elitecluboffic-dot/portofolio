import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const TITLES = ['Frontend Developer', 'React Specialist', 'UI Craftsman', 'Next.js Engineer'];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const target = TITLES[titleIdx];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((prev) => (prev + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  // Matrix rain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);
    const chars = '01アイウエオカキクケコサシスセソ</>{}[]()';

    const draw = () => {
      ctx.fillStyle = 'rgba(5,10,5,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0,255,136,0.15)';
      ctx.font = '14px DM Mono, monospace';

      drops.forEach((y, x) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, x * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[x] = 0;
        drops[x]++;
      });
    };

    const interval = setInterval(draw, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="matrix-canvas" />

      <div className="hero-grid-lines" aria-hidden="true">
        {[...Array(8)].map((_, i) => <div key={i} className="grid-line" />)}
      </div>

      <div className="hero-content container">
        <div className="hero-left">
          <div className="hero-tag fade-up visible" style={{ transitionDelay: '0.1s' }}>
            <span className="tag-dot" />
            Available for hire
          </div>

          <h1 className="hero-name fade-up visible" style={{ transitionDelay: '0.2s' }}>
            Bustanul<br />
            <span className="name-accent">Labib</span><br />
            Alwasi
          </h1>

          <div className="hero-title fade-up visible" style={{ transitionDelay: '0.35s' }}>
            <span className="title-prefix">&gt;_</span>
            <span className="typed-text">{displayed}</span>
            <span className="cursor-blink" />
          </div>

          <p className="hero-desc fade-up visible" style={{ transitionDelay: '0.5s' }}>
            Crafting pixel-perfect, high-performance web experiences
            with React, Next.js & Tailwind. Passionate about clean code
            and delightful UIs.
          </p>

          <div className="hero-actions fade-up visible" style={{ transitionDelay: '0.65s' }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>

          <div className="hero-stats fade-up visible" style={{ transitionDelay: '0.8s' }}>
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-right fade-up visible" style={{ transitionDelay: '0.4s' }}>
          <div className="avatar-wrapper">
            <div className="avatar-ring ring1" />
            <div className="avatar-ring ring2" />
            <div className="avatar-ring ring3" />
            <div className="avatar-inner">
              <div className="avatar-placeholder">
                <img src="https://res.cloudinary.com/dhg2g8syu/image/upload/fl_immutable_cache,f_auto/v1773121879/IMG-20260309-002748-148_dephrx.jpg" alt="Bustanul Labib Alwasi" />
              </div>
            </div>
            <div className="avatar-badge">
              <span>Frontend Dev</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
