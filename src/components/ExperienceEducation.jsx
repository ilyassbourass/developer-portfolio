import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ExperienceEducation = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const timelineData = [
    {
      date: '2026',
      title: t('exp.techdesk.title'),
      org: t('exp.techdesk.org'),
      desc: t('exp.techdesk.desc'),
      type: t('exp.type.project'),
    },
    {
      date: '2026',
      title: t('exp.jobix.title'),
      org: t('exp.jobix.org'),
      desc: t('exp.jobix.desc'),
      type: t('exp.type.project'),
    },
    {
      date: '2026',
      title: t('exp.dormant.title'),
      org: t('exp.dormant.org'),
      desc: t('exp.dormant.desc'),
      type: t('exp.type.project'),
    },
    {
      date: '2025 — 2026',
      title: t('exp.cyber.title'),
      org: t('exp.cyber.org'),
      desc: t('exp.cyber.desc'),
      type: t('exp.type.education'),
    },
    {
      date: '2023 — 2025',
      title: t('exp.dts.title'),
      org: t('exp.dts.org'),
      desc: t('exp.dts.desc'),
      type: t('exp.type.education'),
    },
    {
      date: '2022 — 2023',
      title: t('exp.bac.title'),
      org: t('exp.bac.org'),
      desc: t('exp.bac.desc'),
      type: t('exp.type.education'),
    },
  ];

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
    <section className="container" id="experience" ref={sectionRef}>
      <h2 className="section-title reveal">{t('exp.title')} <span className="text-gradient">{t('exp.titleHighlight')}</span></h2>
      <p className="section-subtitle reveal">
        {t('exp.subtitle')}
      </p>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              className={`timeline-item ${isLeft ? 'left' : 'right'} reveal`}
              key={idx}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass glass-glow">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-org">{item.org}</h4>
                <p className="timeline-desc">{item.desc}</p>
                <span className="timeline-badge">{item.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceEducation;
