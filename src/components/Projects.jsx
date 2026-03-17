import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Project Alpha',
    desc: 'A modern web application built with Next.js and Tailwind CSS. Features real-time data, authentication, and a clean responsive design.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Beta',
    desc: 'React dashboard with complex data visualizations, dark mode, and animated transitions. Built for performance and UX.',
    tags: ['React', 'Chart.js', 'TypeScript'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Gamma',
    desc: 'E-commerce storefront with cart, checkout, and payment integration. Optimized for Core Web Vitals.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Project Delta',
    desc: 'Portfolio template generator with customizable themes and one-click deploy to Vercel.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Project Epsilon',
    desc: 'Real-time chat application with rooms, DMs, and emoji support. Built with WebSockets.',
    tags: ['React', 'Socket.io', 'Express'],
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Project Zeta',
    desc: 'Landing page builder with drag-and-drop interface and responsive preview mode.',
    tags: ['React', 'DnD Kit', 'Tailwind'],
    link: '#',
    github: '#',
    featured: false,
  },
];

const FILTERS = ['All', 'Next.js', 'React', 'Tailwind', 'TypeScript'];

const Projects = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState('All');

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

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">// projects</span>
          <h2 className="section-title">What I've Built</h2>
        </div>

        <div className="project-filters fade-up" style={{ transitionDelay: '0.1s' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              className={`project-card fade-up ${project.featured ? 'featured' : ''}`}
              key={project.id}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {project.featured && (
                <span className="featured-badge">Featured</span>
              )}

              <div className="project-top">
                <div className="project-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <div className="project-links">
                  <a href={project.github} className="icon-link" title="GitHub" aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  <a href={project.link} className="icon-link" title="Live demo" aria-label="Live">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
