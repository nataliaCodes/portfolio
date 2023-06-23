import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const currentRoute = props.route;
  
  return (
    <nav className={currentRoute === '/' ? 'hidden navigation' : 'navigation'}>
      <ul className="menu largest flex-column">
        <Link to="/">
          <li><FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon></li>
          {/* <li>Home</li> */}
        </Link>
        <Link to="/about">
          <li><FontAwesomeIcon icon={faPersonCircleQuestion}></FontAwesomeIcon></li>
          {/* <li>About</li> */}
        </Link>
        <Link to="/resume">
          <li><FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon></li>
          {/* <li>Resume</li> */}
        </Link>
        <Link to="/portfolio">
          <li><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></li>
          {/* <li>Portfolio</li> */}
        </Link>
        <Link to="/contact">
          <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></li>
          {/* <li>Contact</li> */}
        </Link>
      </ul>
    </nav>
  );
}