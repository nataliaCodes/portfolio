import './Languages.scss';

import DottedBar from './DottedBar'

function Languages() {
  return (
    <div className="Languages">
      <h1>Languages</h1>
      <div className="lang-content">
        <div className="lang-list">
          <ul>
            <li>EN:</li>
            <li>FR:</li>
            <li>RO:</li>
            <li>IT:</li>
          </ul>
        </div>
        <div className="lang-bars">
          <DottedBar lang="EN" />
          <DottedBar lang="FR" />
          <DottedBar lang="RO" />
          <DottedBar lang="IT" />
        </div>
        <div className="lang-levels">
          <p>Proficient</p>
          <p>Intermediate</p>
          <p>Native</p>
          <p>Beginner</p>
        </div>
      </div>
    </div>
  );
}

export default Languages;