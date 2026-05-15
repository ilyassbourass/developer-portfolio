import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const skillCategories = [
  // ... skills array remains unchanged

  {
    title: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB', icon: (
        <svg viewBox="0 0 256 228" width="40" height="40"><g fill="#61DAFB"><circle cx="128" cy="114" r="20"/><ellipse cx="128" cy="114" rx="124" ry="42" fill="none" stroke="#61DAFB" strokeWidth="8"/><ellipse cx="128" cy="114" rx="124" ry="42" fill="none" stroke="#61DAFB" strokeWidth="8" transform="rotate(60 128 114)"/><ellipse cx="128" cy="114" rx="124" ry="42" fill="none" stroke="#61DAFB" strokeWidth="8" transform="rotate(120 128 114)"/></g></svg>
      )},
      { name: 'JavaScript', color: '#F7DF1E', icon: (
        <svg viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="#F7DF1E" rx="12"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill="#000"/></svg>
      )},
      { name: 'TypeScript', color: '#3178C6', icon: (
        <svg viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="#3178C6" rx="12"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.796 10.669-11.672 2.621-4.875 3.932-10.953 3.932-18.233 0-5.296-.914-9.882-2.744-13.756a37.025 37.025 0 0 0-7.645-10.669c-3.263-3.09-7.094-5.835-11.495-8.234-4.4-2.399-9.168-4.63-14.304-6.691-3.726-1.554-7.094-3.032-10.104-4.434-3.01-1.402-5.584-2.847-7.72-4.337-2.136-1.49-3.783-3.109-4.94-4.857-1.157-1.748-1.735-3.726-1.735-5.933 0-2.035.52-3.841 1.561-5.418 1.041-1.577 2.504-2.924 4.389-4.041 1.885-1.117 4.141-1.975 6.768-2.573 2.628-.598 5.527-.897 8.699-.897 2.264 0 4.659.173 7.184.52 2.525.346 5.063.895 7.613 1.647a49.344 49.344 0 0 1 7.418 2.938 33.862 33.862 0 0 1 6.45 4.041v-25.543c-4.147-1.67-8.717-2.906-13.713-3.706-4.996-.801-10.701-1.201-17.117-1.201-6.565 0-12.784.695-18.66 2.085-5.876 1.39-11.022 3.571-15.44 6.544-4.418 2.973-7.911 6.853-10.479 11.641-2.568 4.788-3.852 10.549-3.852 17.283 0 8.672 2.568 16.007 7.703 22.005 5.135 5.998 12.726 10.879 22.773 14.641 3.898 1.497 7.535 2.938 10.912 4.321 3.377 1.383 6.305 2.847 8.786 4.392 2.48 1.545 4.437 3.271 5.87 5.179 1.433 1.907 2.15 4.09 2.15 6.544 0 1.921-.462 3.649-1.387 5.183-.924 1.534-2.282 2.85-4.072 3.947-1.79 1.098-3.996 1.937-6.617 2.516-2.621.578-5.618.868-8.992.868-5.988 0-11.895-1.098-17.72-3.295-5.825-2.197-11.108-5.525-15.849-9.983zm-46.382-77.56h29.993v-21.28h-85.95v21.28h29.993V232.9h25.964z" fill="#fff"/></svg>
      )},
      { name: 'Tailwind', color: '#06B6D4', icon: (
        <svg viewBox="0 0 256 154" width="40" height="40"><path d="M128 0Q96 0 80 32q24-32 56-16c12.4 6.2 17.2 16.3 22.8 28.2C166.8 61.6 177.6 80 208 80q32 0 48-32-24 32-56 16c-12.4-6.2-17.2-16.3-22.8-28.2C169.2 18.4 158.4 0 128 0zM48 80Q16 80 0 112q24-32 56-16c12.4 6.2 17.2 16.3 22.8 28.2C86.8 141.6 97.6 160 128 160q32 0 48-32-24 32-56 16c-12.4-6.2-17.2-16.3-22.8-28.2C89.2 98.4 78.4 80 48 80z" fill="#06B6D4"/></svg>
      )},
      { name: 'HTML/CSS', color: '#E34F26', icon: (
        <svg viewBox="0 0 256 256" width="40" height="40"><path d="M24 0h208l-18.9 213.4L128 240l-85.1-26.6z" fill="#E34F26"/><path d="M128 22v196.9l68.9-19.1L212.3 22z" fill="#EF652A"/><path d="M53.5 65.2h74.3v-22H29.3l1.6 17.9 14.9 167 82 22.7V228l-.2.1-67-18.6-4.6-51h21.9l2.3 26.1 47.4 12.8V175l-.2.1-80.6-22.3z" fill="#FFF"/><path d="M127.8 135.2h35.5l-3.8 42.1-31.7 8.6v22.9l58.4-16.2.4-4.6 6.7-75.1.7-7.7h-66.2zm0-70h68.2l.6-6.6 1.4-15.4.8-8.8h-71z" fill="#EBEBEB"/></svg>
      )},
      { name: 'Vite', color: '#646CFF', icon: (
        <svg viewBox="0 0 256 257" width="40" height="40"><defs><linearGradient id="viteA" x1="-.8%" y1="7.7%" x2="57.6%" y2="78.4%"><stop offset="0" stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/></linearGradient><linearGradient id="viteB" x1="43.4%" y1="2.2%" x2="50.2%" y2="60.6%"><stop offset="0" stopColor="#FFBD4F"/><stop offset="1" stopColor="#FF9640"/></linearGradient></defs><path d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z" fill="url(#viteA)"/><path d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z" fill="url(#viteB)"/></svg>
      )},
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', color: '#FF2D20', icon: (
        <svg viewBox="0 0 256 265" width="40" height="40"><path d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.234a4.275 4.275 0 0 1-.953.415c-.108.036-.218.06-.325.093a4.142 4.142 0 0 1-2.136 0 5.207 5.207 0 0 1-.333-.093 4.116 4.116 0 0 1-.942-.415L1.638 205.95a4.133 4.133 0 0 1-2.063-3.58V31.193A4.153 4.153 0 0 1-.28 30.13c.027-.116.088-.222.127-.333a4.15 4.15 0 0 1 .38-.883c.06-.09.106-.19.176-.274a4.16 4.16 0 0 1 .673-.672c.08-.06.17-.108.254-.163a4.3 4.3 0 0 1 .853-.39L51.66 1.383a4.134 4.134 0 0 1 4.126 0l49.477 28.565c.301.147.574.34.823.561.085.07.18.127.258.203.238.234.441.5.604.791.055.097.13.183.177.285.14.324.241.666.293 1.02.02.12.064.233.074.357v104.95l41.455-23.933V59.62c0-.124.054-.237.074-.358a4.15 4.15 0 0 1 .291-1.019c.049-.103.124-.19.179-.287.162-.29.365-.557.603-.79.078-.077.173-.133.259-.203.249-.222.522-.415.824-.562l49.477-28.564a4.135 4.135 0 0 1 4.126 0l49.477 28.564a4.28 4.28 0 0 1 .855.39c.084.055.174.104.254.163.235.197.458.409.657.656.078.09.128.197.19.291.142.24.272.49.372.76.047.113.114.218.15.337zM247.584 115.262V67.476l-17.42 10.052-24.035 13.881v47.786l41.455-23.933zm-49.477 85.08V152.55L158.2 175.382l-55.12 31.19v48.36l95.027-54.59zM8.274 39.266v160.23l95.028 54.878v-48.36L55.832 176.77c-.106-.06-.19-.146-.283-.215a4.1 4.1 0 0 1-.642-.639c-.078-.095-.18-.168-.245-.269a4.1 4.1 0 0 1-.393-.81c-.038-.104-.11-.196-.138-.305a4.142 4.142 0 0 1-.14-1.067V67.47L30.958 53.588 13.538 43.537v-4.27h-5.264zm45.093-30.092L12.892 31.195l40.475 23.373 40.475-23.373-40.475-23.02zM67.53 163.39l24.034-13.879V39.266l-17.42 10.052-24.034 13.88v110.245L67.53 163.39zm86.87-124.292l-40.474 23.371 40.475 23.373 40.474-23.372-40.475-23.372zm-4.064 54.736l-24.035-13.88-17.42-10.053v47.786l24.035 13.881 17.42 10.052V93.834zm-95.028 111.11l75.528-42.707 19.48-11.02-40.43-23.343-47.477 27.41-47.51 27.419 40.409 22.24z" fill="#FF2D20"/></svg>
      )},
      { name: 'PHP', color: '#777BB4', icon: (
        <svg viewBox="0 0 256 135" width="40" height="40"><defs><radialGradient id="phpA" cx="50%" cy="59.6%" r="59.4%"><stop offset="0" stopColor="#AEB2D5"/><stop offset="1" stopColor="#484C89"/></radialGradient></defs><ellipse cx="128" cy="67.3" rx="128" ry="67.3" fill="url(#phpA)"/><path d="M35.945 106.082l14.028-71.014h28.167c12.812 0 21.091 6.3 21.091 17.277 0 14.57-12.83 25.895-28.943 25.895h-14.32l-4.7 27.842h-15.323zm24.762-40.32h8.494c8.504 0 14.36-5.2 14.36-12.3 0-4.862-3.312-7.454-9.185-7.454h-9.57l-4.099 19.754z" fill="#FFF"/><path d="M96.891 77.831c0-20.086 15.06-38.24 37.705-38.24 16.33 0 25.628 9.315 25.628 22.11 0 19.985-14.928 38.455-37.923 38.455-16.33 0-25.41-9.66-25.41-22.325zm17.81 10.73c3.747 3.296 8.207 4.862 12.983 4.862 11.69 0 20.746-13.23 20.746-25.695 0-7.107-3.53-14.346-12.962-14.346-11.69 0-20.625 12.884-20.625 25.348 0 3.73.868 6.942 2.3 9.373l-2.442.458z" fill="#FFF"/><path d="M152.098 106.082l14.028-71.014h28.167c12.812 0 21.091 6.3 21.091 17.277 0 14.57-12.83 25.895-28.943 25.895h-14.32l-4.7 27.842h-15.323zm24.762-40.32h8.494c8.504 0 14.36-5.2 14.36-12.3 0-4.862-3.312-7.454-9.185-7.454h-9.57l-4.099 19.754z" fill="#FFF"/></svg>
      )},
      { name: 'PostgreSQL', color: '#336791', icon: (
        <img src="/postgresql.svg" alt="PostgreSQL" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'SQLite', color: '#003B57', icon: (
        <img src="/sqlite.svg" alt="SQLite" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Node.js', color: '#339933', icon: (
        <img src="/nodejs.svg" alt="Node.js" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
    ],
  },
  {
    title: 'Mobile & Native',
    skills: [
      { name: 'React Native', color: '#61DAFB', icon: (
        <img src="/reactnative.svg" alt="React Native" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Expo', color: '#000020', icon: (
        <img src="/expo.svg" alt="Expo" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Kotlin', color: '#7F52FF', icon: (
        <img src="/kotlin.png" alt="Kotlin" width="40" height="40" style={{ objectFit: 'contain', borderRadius: '4px' }} />
      )},
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', color: '#F05032', icon: (
        <img src="/git.svg" alt="Git" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Docker', color: '#2496ED', icon: (
        <img src="/docker.svg" alt="Docker" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Playwright', color: '#45BA4B', icon: (
        <img src="/playwright.svg" alt="Playwright" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'Linux', color: '#FCC624', icon: (
        <img src="/linux.svg" alt="Linux" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
      { name: 'ADB', color: '#3DDC84', icon: (
        <img src="/adb.svg" alt="ADB" width="40" height="40" style={{ objectFit: 'contain' }} />
      )},
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

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
    <section className="container" id="skills" ref={sectionRef}>
      <h2 className="section-title reveal">{t('skills.title')} <span className="text-gradient">{t('skills.titleHighlight')}</span></h2>
      <p className="section-subtitle reveal">
        {t('skills.subtitle')}
      </p>

      {skillCategories.map((cat, catIdx) => (
        <div key={cat.title} className="skills-category reveal" style={{ transitionDelay: `${catIdx * 0.1}s` }}>
          <h3 className="skills-category-title">{cat.title}</h3>
          <div className="skills-grid">
            {cat.skills.map(skill => (
              <div key={skill.name} className="skill-card glass">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
