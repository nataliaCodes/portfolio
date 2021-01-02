import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './Summary.scss';

import StyledButton from '../Shared/Button'

function Summary() {
  return (
    <div className="Summary">
      <article>
        <h1>Who am I?</h1>
        <p>A junior coder in search of my next challenge.<br />After working my creative muscle as a journalist and media professional, I decided to revive my logical one also by exploring the world of programming. While JavaScript is beginning to feel like a second (or fifth?) language to me, I am still hard at work trying to refine my skills every day with small projects and katas and many many tutorials.</p>
        <h4>Want a closer look at my past achievements?<br /><FontAwesomeIcon icon={faChevronDown} className="arrow bounce" /></h4>
        <StyledButton icon={<FontAwesomeIcon icon={faDownload} />}>Download my CV</StyledButton>
      </article>
      

    </div>
  );
}

export default Summary;