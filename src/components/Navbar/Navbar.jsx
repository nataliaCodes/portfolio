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
        <div className="hamburger flex-column align-center justify-center">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
    }
    </nav>
  );
}