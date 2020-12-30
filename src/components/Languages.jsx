import './Languages.scss';

import DottedBar from './DottedBar'

function Languages() {
  return (
    <div className="Languages">
      <h1>Languages</h1>
      <ul>
        <li>EN: <DottedBar /></li>
        <li>FR: <DottedBar /></li>
        <li>RO: <DottedBar /></li>
        <li>IT: <DottedBar /></li>
      </ul>
    </div>
  );
}

export default Languages;