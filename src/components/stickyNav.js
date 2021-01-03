import Sticky from 'react-sticky-el';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../images/Jem.svg';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';

import About from '../Pages/AboutMe';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import CV from '../Pages/Cv';

function stickyNav() {
  return (
    <Router>
      <Sticky>
        <header className="table">
          <ul id="horizontal-list">
            <img className="logo" src={Logo} alt="JL dev" />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <div>
              <a href="https://github.com/jamesledev" target="_blank">
                <img className="github" src={Github} />
              </a>
              <a href="https://www.linkedin.com/in/jamesle-mt" target="_blank">
                <img className="linkedin" src={LinkedIn} />
              </a>
            </div>
          </ul>
        </header>
      </Sticky>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/cv/" component={CV} />
    </Router>
  );
}

export default stickyNav;
