// import React, { Fragment } from 'react'

import './App.scss';

import Navbar from './Navbar';
import Contact from './Contact';
import Summary from './Summary';
import Info from './Info';
import Languages from './Languages';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Summary />
      <div className="Information">
        <Contact />
        <Languages />
      </div>
      <Skills />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
