import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Pages/AboutMe';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import CV from './Pages/Cv';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/cv/" component={CV} />
      </Router>
    </>
  );
}

export default App;
