import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import Home from './Home_page/Home';
import Skills from './Skills_page/Skills';
import Projects from './Projects_page/Projects';
import Education from './Education_page/Education';
import Experience from './Experience_page/Experience';
import Divider from './Shared/Divider';

function App() {
  return (
    <div className="App">
      <Home />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Experience />
    </div>
  );
}

export default App;
