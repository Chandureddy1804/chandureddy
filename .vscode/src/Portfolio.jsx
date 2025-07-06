import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';


import Languages from './Languages';
import SocialIcons from './SocialIcons';
import ResumeButton from './ResumeButton';

function Portfolio() {
  return (
    <div id="portfolio">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Languages />
      <SocialIcons />
      <ResumeButton />
    </div>
  );
}

export default Portfolio;
