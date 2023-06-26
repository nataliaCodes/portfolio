import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

export default function App() {
  // const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState('/');

  //switch routes when user scrolls
  // function handleScroll(event) {
  //   console.log('listPosition :', listPosition);
  //   console.log('routeList[listPosition] :', routeList[listPosition]);

  //   if (event.deltaY >= 0) {                         //user scrolled down
  //     if (listPosition <= 3) {                       //user has not reached end of routes list
  //       setListPosition(listPosition + 1);
  //       navigate(routeList[listPosition + 1]);
  //       setCurrentRoute(routeList[listPosition + 1]);
  //       console.log('currentRoute scroll down:', currentRoute);
  //     }
  //   } else {                                         //user scrolled up
  //     if (listPosition <= 4 && listPosition !== 0) { //user has not reached top of routes list
  //       setListPosition(listPosition - 1);
  //       navigate(routeList[listPosition - 1]);
  //       setCurrentRoute(routeList[listPosition - 1]);
  //       console.log('currentRoute scroll up:', currentRoute);
  //     }
  //   }
  // };

  function handleClick(e) {
    const route = e.target.baseURI.slice(21, e.target.baseURI.length);

    //if click is on one of the menu links, set route in state
    if (e.target.localName === 'svg' || e.target.localName === 'path') {
      setCurrentRoute(route);
    }
  }

  function resetRoute(home) {
    setCurrentRoute(home);
  }

  return (
    <div className="App flex-column">
      <Header resetRoute={resetRoute} />
      <div className='main-content flex-row' onClick={handleClick}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar route={currentRoute} onClick={handleClick}/>
      </div>
      <Footer />
    </div>
  );
};


