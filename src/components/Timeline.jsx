import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Timeline.scss';

function Timeline(props) {
  return (
    <div className="Timeline">
      <aside>
        <h3>{props.year}</h3>
        <FontAwesomeIcon className="chevron" icon={faChevronCircleRight} />
      </aside>
    </div>
  );
}

export default Timeline;