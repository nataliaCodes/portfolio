import './Info.scss';
import avatar from '../images/Nat.jpg'

function Info() {
  return (
    <div className="Info">
      <div>
        <img src={avatar} alt="avatar" />
        <h1>Natalia Martian</h1>
        <h2>Full-stack developer</h2>
      </div>
    </div>
  );
}

export default Info;