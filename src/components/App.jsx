import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './Navbar'
import Home from './Home_page/Home';
import Skills from './Skills_page/Skills';
import Projects from './Projects_page/Projects';
import Education from './Education_page/Education';
import Experience from './Experience_page/Experience';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Switch>
        <Route exact path="/resume" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
