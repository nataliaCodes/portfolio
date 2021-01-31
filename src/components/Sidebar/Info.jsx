import './Info.scss';
import avatar from '../../images/Nat.jpg';
import Contact from './Contact'
import Social from './Social';

function Info() {
  return (
    <div className="Info">
      <h1 className="hide-on-desktop">Natalia Martian</h1>
      <img src={avatar} alt="avatar" />
      <Social />
      <Contact />
    </div>
  );
}

export default Info;