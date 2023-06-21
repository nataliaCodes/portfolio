import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const navigate = useNavigate();
  const [listPosition, setListPosition] = useState(0);
  const routeList = ['/', '/about', '/resume', '/portfolio', '/contact'];

  function handleScroll(event) {
    if (event.deltaY >= 0) {
      if (listPosition <= 3) {
        setListPosition(listPosition + 1);
        navigate(routeList[listPosition + 1]);
      }
    } else {
      if (listPosition <= 4 && listPosition !== 0) {
        setListPosition(listPosition - 1);
        navigate(routeList[listPosition - 1]);
      }
    }  
  };

  return (
    <div className="App" >
      <Header />
      <div className='main-content' onWheel={handleScroll}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
};


