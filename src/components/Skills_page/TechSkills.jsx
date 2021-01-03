import './TechSkills.scss';

import arrowSkills from '../../images/arrow-skills.png'

function TechSkills() {
  return (
    <div id="skills" className="TechSkills">
        <div className="skills-text">
          <h3>Languages</h3>
          <h2>JavaScript, SQL, HTML/CSS, Ruby</h2>
          <h3>Frameworks/libraries</h3>
          <h2 className="move-right">NodeJS, Express, ReactJS, Axios, AJAX, jQuery, EJS, Material-UI, Bootstrap, SASS, ProgresSQL, Rails</h2>
          <h3>Testing</h3>
          <h2 className="move-right">Mocha&Chai, Storybook, Jest, ESLint</h2>
          <h3>Complementary platforms</h3>
          <h2 className="move-up">GitHub,  Jira, Confluence, Axure,  Photoshop, Illustrator, After Effects, Microsoft360, PowerApps</h2>
        </div>
        <img src={arrowSkills} alt="graphic-representation-of-skills" />
    </div>
  );
}

export default TechSkills;