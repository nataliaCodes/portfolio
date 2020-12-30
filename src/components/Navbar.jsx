import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBrain, faTerminal, faGraduationCap, faLaptop } from '@fortawesome/free-solid-svg-icons'

import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';

import './Navbar.scss';

import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles((theme) => ({
  tooltip: {
    color: 'rgba(246, 248, 242, 1)',
    boxShadow: theme.shadows[1],
    fontSize: '.9em',
    marginTop: '-1.5em',
    marginRight: '-1em'
  },
}))(Tooltip);

function Navbar() {
  return (
    <div className="Navbar">
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Contact" 
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="envelope" icon={faEnvelope} />
        </div>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Skills" 
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="brain" icon={faBrain} />
        </div>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Projects" 
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="terminal" icon={faTerminal} />
        </div>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Education" 
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="cap" icon={faGraduationCap} />
        </div>
      </StyledTooltip>
      <StyledTooltip 
        TransitionComponent={Fade} 
        title="Experience" 
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="laptop" icon={faLaptop} />
        </div>
      </StyledTooltip>
    </div>
  );
}

export default Navbar;