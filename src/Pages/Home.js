import TypingCom from '../components/TypistCom';
import StickyNav from '../components/stickyNav';

function Home() {
  return (
    <div className="backgroundPic">
      <StickyNav />
      <div className="home">
        <h1 className="homeChild">
          <TypingCom />
        </h1>
      </div>
    </div>
  );
}

export default Home;
