import { Link } from 'react-router-dom';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './Summary.scss';

import StyledButton from '../Shared/Button';
import file from '../../files/Natalia.Martian.resume.pdf';

function Summary() {

  return (
    <div className="Summary">
      <article>
        <h1>Who am I?</h1>
        <p>A junior coder in search of my next challenge.<br />After working my creative muscle as a media professional and journalist, I decided to revive my logical one also by exploring the world of programming. While JavaScript is beginning to feel like a second (or fifth?) language to me, I am still hard at work trying to refine my skills every day with small projects and katas and many many tutorials.</p>
        <h3>Want a closer look at my achievements?<br /><br /><FontAwesomeIcon icon={faChevronDown} className="arrow bounce" /></h3>
        
        <Link to="NataliaMresume.pdf" target="_blank" download>
          <StyledButton icon={<FontAwesomeIcon icon={faDownload} />}>Download my CV</StyledButton>
        </Link>
      </article>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">
        <div id="pdfviewer">
            <div
              style={{
                overflow: 'hidden',
                height: '87em',
                border: '.5px solid gray',
              }}
            >
              <Viewer
                fileUrl={file}
                defaultScale="1.3"
              />
            </div>
        </div>
      </Worker>
    </div>
  );
}

export default Summary;