import './App.css';
import StickyNav from './components/stickyNav';
import AboutMe from './components/AboutMe';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <>
      <div className="siteLogo">
        <div className="container">
          <h1 className="heading">James Le</h1>
          <h1 className="headingText heading">I am unemployed :)</h1>
        </div>
      </div>
      <StickyNav />

      <AboutMe />
      <RecentWork />
    </>
  );
}

export default App;
