import { useCallback, useMemo, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const roles = useMemo(() => [
    t('role.fullstack'),
    t('role.mobile'),
    t('role.backend'),
    t('role.problemSolver')
  ], [t]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setRoleIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#00F5FF", "#D100D1"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { density: { enable: true, area: 900 }, value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Profile Photo */}
        <div className="hero-photo-wrapper hero-animate">
          <div className="hero-photo-ring"></div>
          <img
            src="/photo_5913708279542516741_y.jpg"
            alt="Ilyass Bourass"
            className="hero-photo"
          />
        </div>

        <h2 className="hero-animate hero-animate-delay-1" style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          marginBottom: '0.75rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>
          {t('hero.greeting')}
        </h2>

        <h1 className="hero-animate hero-animate-delay-2" style={{
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          <span className="text-gradient">{t('hero.name')}</span>
        </h1>

        <div className="hero-animate hero-animate-delay-3" style={{ marginBottom: '1.5rem' }}>
          <span className="typewriter-text">
            {displayed}
            <span className="typewriter-cursor"></span>
          </span>
        </div>

        <p className="hero-animate hero-animate-delay-3" style={{
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
          maxWidth: '550px',
          margin: '0 auto 0',
          lineHeight: 1.7,
        }}>
          {t('hero.description')}
        </p>

        <div className="hero-buttons hero-animate hero-animate-delay-4">
          <a href="#projects" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            {t('hero.viewWork')}
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {t('hero.contactMe')}
          </a>
          <a href="/ILYASS BOURASS CV 2.developer.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            {t('hero.viewCv')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
