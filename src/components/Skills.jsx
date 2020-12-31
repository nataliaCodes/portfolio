import './Skills.scss';

// import Skill from './Skill';
import arrowSkills from '../images/arrow-skills.png'

function Skills() {
  return (
    <div className="Skills">
      {/* <Skill text="Languages" />
      <Skill text="Frameworks/libraries" />
      <Skill text="Testing" />
      <Skill text="Complementary" /> */}
        <div className="skills-text">
          <h3>Languages</h3>
          <h2>JavaScript, SQL, HTML/CSS</h2>
          <h3>Frameworks/libraries</h3>
          <h2>NodeJS, Express, ReactJS, Ajax, jQuery, EJS, Bootstrap, SASS, ProgresSQL</h2>
          <h3>Testing</h3>
          <h2>Mocha&Chai, Storybook, Jest</h2>
          <h3>Complementary platforms</h3>
          <h2>Microsoft Office (Excel, Word, OneNote), Jira, Confluence, SharePoint, PowerApps, Axure, Adobe Suite (Photoshop, Illustrator, After Effects)</h2>
        </div>
        <img src={arrowSkills} alt="graphic-representation-of-skills" />
    </div>
  );
}

export default Skills;