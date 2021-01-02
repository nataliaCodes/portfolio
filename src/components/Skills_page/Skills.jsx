import SoftSkills from './SoftSkills';
import TechSkills from './TechSkills';
import Divider from '../Shared/Divider'

function Skills() {
  return (
    <div className="Skills">
      <SoftSkills />
      <Divider />
      <TechSkills />
    </div>
  );
};

export default Skills;