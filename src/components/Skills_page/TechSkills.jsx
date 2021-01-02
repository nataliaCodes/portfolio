import './TechSkills.scss';

import arrowSkills from '../../images/arrow-skills.png'

function Skills() {
  return (
    <div id="skills" className="Skills">
        <div className="skills-text">
          <h3>Languages</h3>
          <h2>JavaScript, SQL, HTML/CSS</h2>
          <h3>Frameworks/libraries</h3>
          <h2 className="move-right">NodeJS, Express, ReactJS, Ajax, jQuery, EJS, Bootstrap, SASS, ProgresSQL</h2>
          <h3>Testing</h3>
          <h2 className="move-right">Mocha&Chai, Storybook, Jest</h2>
          <h3>Complementary platforms</h3>
          <h2 className="move-up">Microsoft Office (Excel, Word, OneNote), Jira, Confluence, SharePoint, PowerApps, Axure, Adobe Suite (Photoshop, Illustrator, After Effects)</h2>
        </div>
        <img src={arrowSkills} alt="graphic-representation-of-skills" />
    </div>
  );
}

export default Skills;