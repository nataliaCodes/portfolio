import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Navbar() {

  //extract current route
  const location = useLocation();
  const route = location.pathname;

  //update state when resizing window
  const [isWide, setIsWide] = useState(window.innerWidth > 810);
  const updateMedia = () => {
    setIsWide(window.innerWidth > 810);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //open and close hamburger menu
  const [isActive, setIsActive] = useState(false);      //menu is expanded or collapsed
  const [firstClick, setFirstClick] = useState(true);   //prevent animation from happening on first page load
  const menuClicked = (e) => {
  console.log('e :', e);
    //if click is on hamburger menu or x
    if (e.target.id && e.target.id === 'check') {
      setFirstClick(false);
      if (e.target.className === 'collapsed') {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    //if click is on any of the menu links
    if (e.target.outerHTML.includes('<li>')) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", menuClicked);
    return () => window.removeEventListener("click", menuClicked);
  });

  return (
    <nav>
      {isWide ?
        <ul className="menu flex-row">
          {route !== '/portfolio' &&
            (<NavLink exact="true" to="/portfolio">
              <li>Home</li>
            </NavLink>)
          }
          <NavLink exact="true" to="/about">
            <li>About</li>
          </NavLink>
          <NavLink exact="true" to="/skills">
            <li>Skills</li>
          </NavLink>
          <NavLink exact="true" to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink exact="true" to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
        :
        <div>
          <div className={`ham-menu ${isActive ? 'expanded' : 'collapsed'}`}>
            <div className={`ham-bckgrd ${!firstClick ? (isActive ? 'expanded' : 'collapsed') : 'not-clicked'}`}></div>
            <label className="bar" htmlFor="check">
              <input type="checkbox" id="check" className={`${isActive ? 'expanded' : 'collapsed'}`}></input>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </label>
          </div>
          {isActive &&
            <ul className="side-menu flex-column">
              {route !== '/portfolio' &&
                (<NavLink exact="true" to="/portfolio">
                  <li>Home</li>
                </NavLink>)
              }
              <NavLink exact="true" to="/about">
                <li>About</li>
              </NavLink>
              <NavLink exact="true" to="/skills">
                <li>Skills</li>
              </NavLink>
              <NavLink exact="true" to="/projects">
                <li>Projects</li>
              </NavLink>
              <NavLink exact="true" to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>}
        </div>
      }
    </nav>
  );
}