
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
      <div className="navBox">

        <header className="headerBox">
          <ul id="horizontal-list">
            <Link to="/">
              <img className="logo" src={Logo} alt="JL dev" />
            </Link>
            <div className="navButtons">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/cv">CV</Link>
              </li>
            </div>
            <div>
              <a
                href="https://github.com/jamesledev"
                target="_blank"
                rel="noreferrer"
              >
                <img className="github" src={Github} alt="Github Profile" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamesle-mt"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkedin" src={LinkedIn} alt="Linked-in" />
              </a>
            </div>
          </ul>
        </header>

      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route path="/cv/" component={CV} />
    </Router>
  );
}

export default stickyNav;
