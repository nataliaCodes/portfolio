import './Languages.scss';

import DottedBar from './DottedBar'

function Languages() {
  return (
    <div className="Languages">
      <h1>Languages</h1>
      <table className="lang-bars">
        <DottedBar lang="EN" level="Proficient" />
        <DottedBar lang="FR" level="Intermediate" />
        <DottedBar lang="RO" level="Native" />
        <DottedBar lang="IT" level="Beginner" />
      </table>
    </div>
  );
}

export default Languages;