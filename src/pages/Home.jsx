import Banner from '../components/Banner';
import Activity from '../components/Activity';
import Curriculum from '../components/Curriculum';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Activity />
      <Curriculum />
      <Footer />
    </div>
  );
}

export default Home;
