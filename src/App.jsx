import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
