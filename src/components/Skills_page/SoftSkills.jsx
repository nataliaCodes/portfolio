import './SoftSkills.scss';

import Languages from './Languages'

function SoftSkills() {
  return (
    <div className="SoftSkills">
      <div className="soft-skills">
        <h1>My skills</h1>
        <p className="soft-skills-list"><span>Agile methodologies,</span> manual testing, <span>bug management,</span> coordination, <span>management</span></p>
        <p className="soft-skills-list"><span>Team player,</span> attention to detail, <span>problem-solving,</span> time management, <span>pro-active</span></p>
      </div>
      <Languages />
    </div>
  );
}

export default SoftSkills;