import React, { useEffect, useRef } from 'react';
import './Skills.css';

const SKILLS = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'Next.js', level: 85, icon: '▲' },
  { name: 'Tailwind CSS', level: 92, icon: '🌊' },
  { name: 'JavaScript', level: 88, icon: '📜' },
  { name: 'TypeScript', level: 75, icon: '🔷' },
  { name: 'HTML & CSS', level: 95, icon: '🎨' },
  { name: 'Git & GitHub', level: 82, icon: '🌿' },
  { name: 'Figma', level: 70, icon: '🖼️' },
];

const TOOLS = [
  'VS Code', 'GitHub', 'Vercel', 'Netlify', 'Postman',
  'Figma', 'npm', 'pnpm', 'ESLint', 'Prettier',
  'Chrome DevTools', 'Cloudflare', 'Linux',
];

const Skills = () => {
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

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">// skills</span>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div
              className="skill-card fade-up"
              key={skill.name}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ '--target-width': `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section fade-up" style={{ transitionDelay: '0.4s' }}>
          <h3 className="tools-title">// tools & environment</h3>
          <div className="tools-marquee-wrapper">
            <div className="tools-marquee">
              {[...TOOLS, ...TOOLS].map((tool, i) => (
                <span className="tool-chip" key={i}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
