import './Skill.scss';

function Skill(props) {
  return (
    <div className="Skill">
      <div className="rectangle"></div>
      <p className="skill-text">{props.text}</p>
    </div>
  );
}

export default Skill;