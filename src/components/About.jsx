import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="container" id="about" ref={sectionRef}>
      <h2 className="section-title reveal">{t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span></h2>
      <p className="section-subtitle reveal">
        {t('about.subtitle')}
      </p>

      <div className="about-grid">
        {/* Left Column — Personal Info */}
        <div className="reveal">
          <div className="glass glass-glow" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{t('about.personalInfo')}</h3>
            <div className="about-info-list">
              <div className="about-info-item">
                <span className="label">{t('about.name')}</span>
                <span className="value">Ilyass Bourass</span>
              </div>
              <div className="about-info-item">
                <span className="label">{t('about.email')}</span>
                <span className="value">
                  <a href="mailto:ilyassbourass2012@gmail.com">ilyassbourass2012@gmail.com</a>
                </span>
              </div>
              <div className="about-info-item">
                <span className="label">{t('about.phone')}</span>
                <span className="value">
                  <a href="tel:+212695499401">+212 695 499 401</a>
                </span>
              </div>
              <div className="about-info-item">
                <span className="label">{t('about.location')}</span>
                <span className="value">Nador, Morocco</span>
              </div>
              <div className="about-info-item">
                <span className="label">GitHub</span>
                <span className="value">
                  <a href="https://github.com/ilyassbourass" target="_blank" rel="noopener noreferrer">ilyassbourass</a>
                </span>
              </div>
              <div className="about-info-item">
                <span className="label">LinkedIn</span>
                <span className="value">
                  <a href="https://linkedin.com/in/ilyassbourass" target="_blank" rel="noopener noreferrer">ilyassbourass</a>
                </span>
              </div>
              <div className="about-info-item" style={{ borderBottom: 'none' }}>
                <span className="label">{t('about.status')}</span>
                <span className="value" style={{ color: 'var(--magenta)' }}>{t('about.available')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Bio + Stats */}
        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="glass glass-glow" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{t('about.whoIAm')}</h3>
            <p className="about-bio">
              {t('about.bio1')}
            </p>
            <p className="about-bio" style={{ marginBottom: 0 }}>
              {t('about.bio2')}
            </p>
          </div>

          <div className="stat-cards">
            <div className="stat-card glass glass-glow">
              <div className="stat-icon">🎓</div>
              <div className="stat-value">DTS</div>
              <div className="stat-label">{t('about.stat1')}</div>
            </div>
            <div className="stat-card glass glass-glow">
              <div className="stat-icon">🚀</div>
              <div className="stat-value">5+</div>
              <div className="stat-label">{t('about.stat2')}</div>
            </div>
            <div className="stat-card glass glass-glow">
              <div className="stat-icon">🌍</div>
              <div className="stat-value">3</div>
              <div className="stat-label">{t('about.stat3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
