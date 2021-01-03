import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBrain, faTerminal, faGraduationCap, faLaptop } from '@fortawesome/free-solid-svg-icons';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';

import './Navbar.scss';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    color: 'rgba(246, 248, 242, 1)',
    boxShadow: theme.shadows[1],
    fontSize: '.9em',
    marginTop: '-1.9em',
    marginRight: '-1em'
  },
}))(Tooltip);

function Navbar() {

  return (
    <div className="Navbar">
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Home" 
      >
        <Link to="/resume">
          <div className="menu-icon">
            <FontAwesomeIcon className="home" icon={faHome} />
          </div>
        </Link>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Skills" 
      >
        <Link to="/skills">
          <div className="menu-icon">
            <FontAwesomeIcon className="brain" icon={faBrain} />
          </div>
        </Link>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Projects" 
      >
        <Link to="/projects">
          <div className="menu-icon">
            <FontAwesomeIcon className="terminal" icon={faTerminal} />
          </div>
        </Link>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Education" 
      >
        <Link to="/education">
          <div className="menu-icon">
            <FontAwesomeIcon className="cap" icon={faGraduationCap} />
          </div>
        </Link>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Experience" 
      >
        <Link to="/experience">
          <div className="menu-icon">
            <FontAwesomeIcon className="laptop" icon={faLaptop} />
          </div>
        </Link>
      </StyledTooltip>
    </div>
  );
}

export default Navbar;