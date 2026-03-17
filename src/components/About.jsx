import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);

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

  const facts = [
    { icon: '📍', label: 'Location', value: 'Indonesia' },
    { icon: '🎓', label: 'Focus', value: 'Frontend Dev' },
    { icon: '💼', label: 'Available', value: 'Freelance / Full-time' },
    { icon: '⚡', label: 'Passion', value: 'Clean & Fast UI' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">// about me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          <div className="about-text fade-up">
            <p>
              Hey! I'm <strong>Bustanul Labib Alwasi</strong>, a passionate Frontend Developer
              based in Indonesia. I specialize in building beautiful, performant,
              and accessible web applications using modern technologies.
            </p>
            <p>
              My journey started with curiosity about how websites work, and it evolved
              into a deep love for crafting experiences that users actually enjoy.
              I believe great code is clean, maintainable, and purposeful.
            </p>
            <p>
              When I'm not coding, I'm exploring new design trends, contributing to
              open source, or experimenting with creative front-end techniques
              that push the boundaries of the web.
            </p>

            <div className="about-cta">
              <a href="/resume.pdf" className="btn-primary" download>
                Download CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                </svg>
              </a>
            </div>
          </div>

          <div className="about-facts fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">about.json</span>
              </div>
              <div className="terminal-body">
                <pre>{`{
  "name": "Bustanul Labib Alwasi",
  "role": "Frontend Developer",
  "location": "Indonesia 🇮🇩",
  "experience": "2+ years",
  "stack": [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript"
  ],
  "available": true,
  "email": "alwasilabib153@gmail.com"
}`}</pre>
              </div>
            </div>

            <div className="facts-grid">
              {facts.map((f, i) => (
                <div className="fact-card" key={i}>
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <div className="fact-label">{f.label}</div>
                    <div className="fact-value">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
