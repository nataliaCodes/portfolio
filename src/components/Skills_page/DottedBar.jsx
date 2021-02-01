import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as fullCircle } from '@fortawesome/free-solid-svg-icons';

import './DottedBar.scss';

function DottedBar(props) {

  return (
    <tr>
      <td>
        <h3>{props.lang}: </h3>
      </td>
      <td>
        <FontAwesomeIcon
          className="dot"
          icon={fullCircle}
        />
        <FontAwesomeIcon
          className="dot"
          icon={fullCircle}
        />
        {props.lang === "RO" || props.lang === "EN" || props.lang === "FR" ?
          <FontAwesomeIcon
            className="dot"
            icon={fullCircle}
          />
          :
          <FontAwesomeIcon
            className="dot"
            icon={emptyCircle}
          />
        }
        {props.lang === "RO" || props.lang === "EN" ?
          <FontAwesomeIcon
            className="dot"
            icon={fullCircle}
          />
          :
          <FontAwesomeIcon
            className="dot"
            icon={emptyCircle}
          />
        }
        {props.lang === "RO" || props.lang === "EN" ?
          <FontAwesomeIcon
            className="dot"
            icon={fullCircle}
          />
          :
          <FontAwesomeIcon
            className="dot"
            icon={emptyCircle}
          />
        }
      </td>
      <td>
        <p>{props.level}</p>
      </td>
    </tr>
  );
}

export default DottedBar;