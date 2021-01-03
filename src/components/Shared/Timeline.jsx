import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faSortDown } from '@fortawesome/free-solid-svg-icons';

import './Timeline.scss';

function Timeline(props) {
  return (
    <div className="Timeline">
      <aside>
        <h3>{props.year}</h3>
        {props.year2 && 
        <>
          <FontAwesomeIcon className="down-arrow" icon={faSortDown}></FontAwesomeIcon>
          <h3 className="year2">{props.year2}</h3>
        </>
        }
      </aside>
      <FontAwesomeIcon className="chevron" icon={faChevronCircleRight} />
    </div>
  );
}

export default Timeline;