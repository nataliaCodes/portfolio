import portrait from '../../img/Nat_cartoon_blue.jpg';

export default function Home() {

  return (
    <div className="page-content flex-row blue-bckgrd">
      <div className="intro-text largest-text bold">
        <div>Hi, I'm Natalia</div>
        <div className='changing-text'>
          <span>Web developer</span>
          <span>Team player</span>
          <span>Tree hugger</span>
          <span>Problem solver</span>
          <span>Cat lover</span>
          <span>Fast learner</span>
        </div>
        <div>Welcome to my site!</div>
      </div>
      <img className='intro-img' src={portrait} alt="cartoon portrait" />
    </div>
  );
}