import portrait from '../../img/Nat_cartoon_blue.jpg';

export default function Home() {

  return (
    <div className="page-content flex-row blue-bckgrd">
      <div className="intro-text largest-text bold">
        <div>Hi, I'm Natalia</div>
        <div className='changing-text'>
          <ul>
            <li>Web developer</li>
            <li>Team player</li>
            <li>Tree hugger</li>
            <li>Problem solver</li>
            <li>Cat lover</li>
            <li>Fast learner</li>
          </ul>
        </div>
        <div>Welcome to my site!</div>
      </div>
      <img className='intro-img' src={portrait} alt="cartoon portrait" />
    </div>
  );
}