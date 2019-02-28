import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Archives from './components/Archives';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={MainPage} />
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/archives" component={Archives} />
            </div>
          <Route exact path="/admin" component={Admin} />
        </div>
    </Router>
    );
  }
}

export default App;
