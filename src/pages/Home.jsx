import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import LearningJourney from '../components/LearningJourney';
import Experience from '../components/Experience';
import GithubShowcase from '../components/GithubShowcase';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    document.title = "Vishwa | Student Developer – AI & Data Science";
  }, []);

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <LearningJourney />
      <Experience />
      <GithubShowcase />
      <Resume />
      <Contact />
    </main>
  );
}

