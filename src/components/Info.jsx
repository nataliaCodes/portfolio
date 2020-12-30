import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Info.scss';
import avatar from '../images/Nat.jpg';
import Contact from './Contact'

function Info() {
  return (
    <div className="Info">
      <aside>
        <img src={avatar} alt="avatar" />
        <div>
          <FontAwesomeIcon className="contact-icons" icon={faLinkedin} />
          <FontAwesomeIcon className="contact-icons" icon={faGithub} />
        </div>
      </aside>
      <Contact />
    </div>
  );
}

export default Info;