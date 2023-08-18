import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <footer className="links xx-large">
      <a href="https://www.linkedin.com/in/nmartian/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/nataliaCodes" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
    </footer>
  );
}