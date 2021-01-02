import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Info.scss';
import avatar from '../../images/Nat.jpg';
import Contact from './Contact'

function Info() {
  return (
    <div className="Info">
      <aside>
        <img src={avatar} alt="avatar" />
        <div>
          <a href="https://www.linkedin.com/in/nmartian/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="contact-icons" icon={faLinkedin} />
          </a>
          <a href="https://github.com/nataliaCodes" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="contact-icons" icon={faGithub} />
          </a>
        </div>
      </aside>
      <Contact />
    </div>
  );
}

export default Info;