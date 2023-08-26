import portrait from '../../img/Nat_cartoon_blue.jpg';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faAddressCard, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  function reverseSpin(e) {
    e.target.classList.add('reverse-spin');
  }

  return (
    <div className="page-content flex-row">
      <div className="intro-text largest-text bold">
        <div>Hi, I'm Natalia</div>
        <div className='changing-text'>
          <span>Web developer</span>
          <span>Team player</span>
          <span>Tree hugger</span>
          <span>Problem solver</span>
          <span>Cat lover</span>
          <span>Fast learner</span>
        </div>
        <div>Welcome to my site!</div>
      </div>
      <div className="intro-imgs flex-row">
        <img className='intro-img' src={portrait} alt="cartoon portrait" />
        <span className='about'>
          <NavLink exact="true" to="/about">
            <FontAwesomeIcon
              className='intro-svg'
              icon={faPersonCircleQuestion}
              onMouseLeave={reverseSpin}
            ></FontAwesomeIcon>
          </NavLink>
        </span>
        <span className='skills'>
          <NavLink exact="true" to="/skills">
            <FontAwesomeIcon
              className='intro-svg'
              icon={faAddressCard}
              onMouseLeave={reverseSpin}
            ></FontAwesomeIcon>
          </NavLink>
        </span>
        <span className='portfolio'>
          <NavLink exact="true" to="/portfolio">
            <FontAwesomeIcon
              className='intro-svg'
              icon={faBriefcase}
              onMouseLeave={reverseSpin}
            ></FontAwesomeIcon>
          </NavLink>
        </span>
        <span className='contact'>
          <NavLink exact="true" to="/contact">
            <FontAwesomeIcon
              className='intro-svg'
              icon={faEnvelope}
              onMouseLeave={reverseSpin}
            ></FontAwesomeIcon>
          </NavLink>
        </span>
        <div className='intro-symbol angle'>
          <p>{'</>'}</p>
        </div>
        <div className='intro-symbol curly'>
          <p>{'{ }'}</p>
        </div>
        <div className='intro-symbol square'>
          <p>{'[...]'}</p>
        </div>
        <div className='intro-symbol func'>
          <p>{'func()'}</p>
        </div>
        <div className='intro-symbol arrow'>
          <p>{'=>'}</p>
        </div>
      </div>
    </div>
  );
}