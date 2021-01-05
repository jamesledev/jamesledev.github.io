import { Link } from 'react-router-dom';
import Logo from '../images/Jem.svg';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';

function stickyNav() {
  return (
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
  );
}

export default stickyNav;
