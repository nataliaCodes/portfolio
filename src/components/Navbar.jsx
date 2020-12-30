import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBrain, faTerminal, faGraduationCap, faLaptop } from '@fortawesome/free-solid-svg-icons'

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';

import './Navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <Tooltip TransitionComponent={Zoom} title="Contact" placement="bottom">
        <div>
          <FontAwesomeIcon className="menu-icon envelope" icon={faEnvelope} />
        </div>
      </Tooltip>
      <Tooltip title="Skills" placement="bottom">
        <div>
          <FontAwesomeIcon className="menu-icon" icon={faBrain} />
        </div>
      </Tooltip>
      <Tooltip title="Projects" placement="bottom">
        <div>
          <FontAwesomeIcon className="menu-icon" icon={faTerminal} />
        </div>
      </Tooltip>
      <Tooltip title="Education" placement="bottom">
        <div>
          <FontAwesomeIcon className="menu-icon cap" icon={faGraduationCap} />
        </div>
      </Tooltip>
      <Tooltip title="Experience" placement="bottom">
        <div>
          <FontAwesomeIcon className="menu-icon" icon={faLaptop} />
        </div>
      </Tooltip>
    </div>
  );
}

export default Navbar;