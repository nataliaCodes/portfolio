import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        {'>'}_ nataliaCodes
      </header>
      <div className='main-content'>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <div id="about" className='about'>About</div>
      <div id="resume" className='about'>Resume</div>
      <div id="portfolio" className='about'>Portfolio</div>
      <div id="contact" className='about'>Contact</div>
      </div>
      <div className='navigation'>
        <nav>
          <ul>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            <li>About</li>
          </Link>
          <Link activeClass="active" to="resume" spy={true} smooth={true}>

            <li>Resume</li>
          </Link>
          <Link activeClass="active" to="portfolio" spy={true} smooth={true}>

            <li>Portfolio</li>
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>

            <li>Contact</li>
          </Link>
          </ul>
        </nav>
      </div>
    </div>
    </BrowserRouter>
  );
}
