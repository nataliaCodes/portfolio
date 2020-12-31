import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as fullCircle } from '@fortawesome/free-solid-svg-icons';

import './DottedBar.scss';

function DottedBar(props) {

  return (
    <div className="DottedBar">
      <FontAwesomeIcon icon={fullCircle} />
      <FontAwesomeIcon icon={fullCircle} />
      {props.lang==="RO" || props.lang==="EN" || props.lang==="FR" ? <FontAwesomeIcon icon={fullCircle} /> : <FontAwesomeIcon icon={emptyCircle} />}
      {props.lang==="RO" || props.lang==="EN" ? <FontAwesomeIcon icon={fullCircle} /> : <FontAwesomeIcon icon={emptyCircle} />}
      {props.lang==="RO" || props.lang==="EN" ? <FontAwesomeIcon icon={fullCircle} /> : <FontAwesomeIcon icon={emptyCircle} />}
    </div>
  );
}

export default DottedBar;