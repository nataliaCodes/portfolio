import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const currentRoute = props.route;
  console.log('currentRoute :', currentRoute);

  return (
    <nav className={currentRoute === '/' ? 'hidden navigation' : 'navigation'}>
      <ul className="menu largest flex-column">
        <NavLink exact="true" activeclassname="active-menu" to="/">
          <li><FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon>&nbsp;</li>
        </NavLink>
        <NavLink exact="true" activeclassname="active-menu" to="/about">
          {currentRoute === '/about' ?
            <li>About&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faPersonCircleQuestion}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" activeclassname="active-menu" to="/resume">
          {currentRoute === '/resume' ?
            <li>Resume&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" activeclassname="active-menu" to="/portfolio">
          {currentRoute === '/portfolio' ?
            <li>Portfolio&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
        <NavLink exact="true" activeclassname="active-menu" to="/contact">
          {currentRoute === '/contact' ?
            <li>Contact&nbsp;</li>
            :
            <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>&nbsp;</li>
          }
        </NavLink>
      </ul>
    </nav>
  );
}