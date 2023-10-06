import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();
  const route = location.pathname;
  console.log('route :', route);

  return (
    <nav className={(route === '/' || route === '/portfolio') ? 'hidden navigation' : 'navigation'}>
      <ul className="menu largest-text flex-column">
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
        <NavLink exact="true" to="/skills">
          {route === '/skills' ?
            <li>Skills&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" to="/portfolio">
          {route === '/portfolio' ?
            <li>Projects&nbsp;</li>
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