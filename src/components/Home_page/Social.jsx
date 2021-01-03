import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Social.scss';

function Social() {
  return (
    <div className="Social">
      <a href="https://www.linkedin.com/in/nmartian/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon className="contact-icons" icon={faLinkedin} />
      </a>
      <a href="https://github.com/nataliaCodes" rel="noreferrer" target="_blank">
        <FontAwesomeIcon className="contact-icons" icon={faGithub} />
      </a>
    </div>
  );
};

export default Social;