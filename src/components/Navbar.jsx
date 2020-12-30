import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBrain, faTerminal, faGraduationCap, faLaptop } from '@fortawesome/free-solid-svg-icons'

import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';

import './Navbar.scss';


function Navbar() {
  return (
    <div className="Navbar">
      <Tooltip 
        TransitionComponent={Fade} 
        title="Contact" 
        placement="top"
        PopperProps={{
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: '10px, -35px',
              },
            },
          },
        }}
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="envelope" icon={faEnvelope} />
        </div>
      </Tooltip>
      <Tooltip 
        TransitionComponent={Fade} 
        title="Skills" 
        placement="top" 
        PopperProps={{
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: '1px, -35px',
              },
            },
          },
        }}
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="brain" icon={faBrain} />
        </div>
      </Tooltip>
      <Tooltip 
        TransitionComponent={Fade} 
        title="Projects" 
        placement="top" 
        PopperProps={{
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: '1px, -35px',
              },
            },
          },
        }}
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="terminal" icon={faTerminal} />
        </div>
      </Tooltip>
      <Tooltip 
        TransitionComponent={Fade} 
        title="Education" 
        placement="top" 
        PopperProps={{
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: '1px, -35px',
              },
            },
          },
        }}
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="cap" icon={faGraduationCap} />
        </div>
      </Tooltip>
      <Tooltip 
        TransitionComponent={Fade} 
        title="Experience" 
        placement="top" 
        PopperProps={{
          popperOptions: {
            modifiers: {
              offset: {
                enabled: true,
                offset: '1px, -35px',
              },
            },
          },
        }}
      >
        <div className="menu-icon">
          <FontAwesomeIcon className="laptop" icon={faLaptop} />
        </div>
      </Tooltip>
    </div>
  );
}

export default Navbar;