import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {

  return (
    <header className="bold" onClick={() => props.resetRoute('/')}>
      <FontAwesomeIcon icon={faChevronRight} />
      <span className='blinking'>_</span>
      <Link to="/" className="logo">
        &nbsp;nataliaCodes
      </Link>
    </header>
  );
}