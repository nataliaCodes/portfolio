import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './Navbar/Navbar';
import Info from './Sidebar/Info';
import Summary from './Home_page/Summary';
import Skills from './Skills_page/Skills';
import Projects from './Projects_page/Projects';
import Education from './Education_page/Education';
import Experience from './Experience_page/Experience';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Info />
      <Switch>
        <Route exact path="/resume" component={Summary} />
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
