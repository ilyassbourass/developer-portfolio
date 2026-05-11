import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const badgeClass = {
  web: 'badge-web',
  mobile: 'badge-mobile',
  android: 'badge-android',
};

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const projects = [
    {
      name: 'TechDesk',
      icon: '/techdesk-logo.svg',
      badges: ['web'],
      desc: t('proj.techdesk.desc'),
      tags: ['Laravel', 'React', 'Vite', 'WebSockets', 'SQLite', 'Playwright'],
      links: {
        live: 'https://techdesk-three.vercel.app',
        github: 'https://github.com/ilyassbourass/TechDesk',
      },
      featured: true,
    },
    {
      name: 'Jobix',
      icon: '/jobix-logo.png',
      badges: ['web'],
      desc: t('proj.jobix.desc'),
      tags: ['Laravel', 'React', 'PostgreSQL', 'Tailwind', 'Cloudflare R2', 'Brevo'],
      links: {
        live: 'https://www.jobixapp.com/',
        github: 'https://github.com/ilyassbourass/Jobix',
      },
      featured: true,
    },
    {
      name: 'Jobix Mobile',
      icon: '/jobix-logo.png',
      badges: ['mobile'],
      desc: t('proj.jobixmobile.desc'),
      tags: ['React Native', 'Expo', 'TypeScript'],
      links: {
        github: 'https://github.com/ilyassbourass/jobix-mobile',
        apk: 'https://github.com/ilyassbourass/jobix-mobile/releases',
      },
    },
    {
      name: 'TechDesk Mobile',
      icon: '/techdesk-logo.svg',
      badges: ['mobile'],
      desc: t('proj.techdeskmobile.desc'),
      tags: ['React Native', 'Expo'],
      links: {
        github: 'https://github.com/ilyassbourass/TechDesk-Mobile',
        apk: 'https://github.com/ilyassbourass/TechDesk-Mobile/releases',
      },
    },
    {
      name: 'Dormant',
      icon: '/dormant.jpg',
      badges: ['android'],
      desc: t('proj.dormant.desc'),
      tags: ['Kotlin', 'Android', 'Shizuku'],
      links: {
        github: 'https://github.com/ilyassbourass/Dormant',
        apk: 'https://github.com/ilyassbourass/Dormant/releases/tag/v1.0.0',
      },
    },
  ];

  const badgeLabel = {
    web: t('proj.badge.web'),
    mobile: t('proj.badge.mobile'),
    android: t('proj.badge.android'),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="container" id="projects" ref={sectionRef}>
      <h2 className="section-title reveal">{t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span></h2>
      <p className="section-subtitle reveal">
        {t('proj.subtitle')}
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className={`project-card glass reveal${project.featured ? ' featured' : ''}`}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="project-card-inner">
              <div className="project-header">
                <img
                  src={project.icon}
                  alt={`${project.name} logo`}
                  className="project-logo"
                />
                <h3 className="project-name">{project.name}</h3>
                <div className="project-badges">
                  {project.badges.map(b => (
                    <span key={b} className={`badge ${badgeClass[b]}`}>{badgeLabel[b]}</span>
                  ))}
                </div>
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    {t('proj.live')}
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    {t('proj.github')}
                  </a>
                )}
                {project.links.apk && (
                  <a href={project.links.apk} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    {t('proj.apk')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
        <a
          href="https://github.com/ilyassbourass"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          {t('proj.explore')}
        </a>
      </div>
    </section>
  );
};

export default Projects;
