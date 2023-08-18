import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  // const navigate = useNavigate();

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

  return (
    <div className="App flex-column">
      <Header />
      <div className='main-content flex-row'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};


