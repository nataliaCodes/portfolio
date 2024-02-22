import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {

  return (
    <header className="bold" >
      <FontAwesomeIcon icon={faChevronRight} />
      <span className='blinking'>_</span>
      <Link to="/portfolio" className="logo">
        &nbsp;<span style={{color: '#FCD151'}}>natalia</span>Codes
      </Link>
    </header>
  );
}