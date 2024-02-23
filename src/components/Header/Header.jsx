import { NavLink } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {

  return (
    <header className="bold" >
      <div>
        <FontAwesomeIcon icon={faChevronRight} />
        <span className='blinking'>_</span>
        <NavLink to="/portfolio" className="logo">
          &nbsp;<span style={{ color: '#FCD151' }}>natalia</span><span style={{ color: '#58E7DE' }}>Codes</span>
        </NavLink>
      </div>

      <Navbar />
    </header>
  );
}