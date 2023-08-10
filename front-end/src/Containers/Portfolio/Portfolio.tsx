import * as React from 'react';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Hobbies from './Hobbies/Hobbies';
import ProfilePortfolio from './Profile';

const Portfolio = () => (
  <>
    <ProfilePortfolio />
    <Experience />
    <Skills />
    <Projects />
    <Hobbies />
  </>
);

export default Portfolio;
