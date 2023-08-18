import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();
  const route = location.pathname;
  console.log('route :', route);

  return (
    <nav className={route === '/' ? 'hidden navigation' : 'navigation'}>
      <ul className="menu largest flex-column">
        <NavLink exact="true" to="/">
          <li><FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon>&nbsp;</li>
        </NavLink>
        <NavLink exact="true" to="/about">
          {route === '/about' ?
            <li>About&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faPersonCircleQuestion}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" to="/resume">
          {route === '/resume' ?
            <li>Resume&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" to="/portfolio">
          {route === '/portfolio' ?
            <li>Portfolio&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" to="/contact">
          {route === '/contact' ?
            <li>Contact&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
      </ul>
    </nav>
  );
}