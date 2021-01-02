import Navbar from './Navbar';
import Summary from './Summary';
import Info from './Info';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Info />
      <Summary />
    </div>
  );
};

export default Home;