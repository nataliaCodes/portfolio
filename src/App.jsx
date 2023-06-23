import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const navigate = useNavigate();
  const [listPosition, setListPosition] = useState(0);
  const [currentRoute, setCurrentRoute] = useState('/');
  const routeList = ['/', '/about', '/resume', '/portfolio', '/contact'];

  //switch routes when user scrolls
  function handleScroll(event) {
    if (event.deltaY >= 0) {                         //user scrolled down
      if (listPosition <= 3) {                       //user has not reached end of routes list
        setListPosition(listPosition + 1);
        navigate(routeList[listPosition + 1]);
        setCurrentRoute(routeList[listPosition + 1]);
        console.log('currentRoute :', currentRoute);
      }
    } else {                                         //user scrolled up
      if (listPosition <= 4 && listPosition !== 0) { //user has not reached top of routes list
        setListPosition(listPosition - 1);
        navigate(routeList[listPosition - 1]);
        setCurrentRoute(routeList[listPosition - 1]);
        console.log('currentRoute :', currentRoute);
      }
    }
  };

  //get current route
  function getRoute() {
    console.log('currentRoute :', currentRoute);
  }

  return (
    <div className="App flex-column" onLoad={getRoute}>
      <Header />
      <div className='main-content flex-row' onWheel={handleScroll}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar route={currentRoute} />
      </div>
      <Footer />
    </div>
  );
};


