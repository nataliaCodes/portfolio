import portrait from '../img/Nat_cartoon_blue.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="page-content flex-row">
      <div className="intro-text largest bold">
        <span>Hi, I'm Natalia</span><br />
        <span>Web developer</span><br />
        <span>Welcome to my site!</span>
      </div>
      <div className="intro-imgs flex-row">
        <img className='intro-img' src={portrait} alt="cartoon portrait" />
        <span className='about'>
        <Link to="/about">
          <FontAwesomeIcon className='intro-svg' icon={faPersonCircleQuestion}></FontAwesomeIcon>
        </Link>
        </span>
        <span className='resume'>
        <Link to="/resume">
          <FontAwesomeIcon className='intro-svg' icon={faAddressCard}></FontAwesomeIcon>
        </Link>
        </span>
        <span className='portfolio'>
        <Link to="/portfolio">
          <FontAwesomeIcon className='intro-svg' icon={faBriefcase}></FontAwesomeIcon>
        </Link>
        </span>
        <span className='contact'>
        <Link to="/contact">
          <FontAwesomeIcon className='intro-svg' icon={faEnvelope}></FontAwesomeIcon>
        </Link>
        </span>
        {/* <div className='intro-img'>
              <p>{'</>'}</p>
            </div>
            <div className='intro-img'>
              <p>{'{ }'}</p>
            </div>
            <div className='intro-img'>
              <p>{'[...]'}</p>
            </div>
            <div className='intro-img'>
              <p>func()</p>
            </div>
            <div className='intro-img'>
              <p>{'=>'}</p>
            </div> */}
      </div>
    </div>
  );
}