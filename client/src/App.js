import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin" component={Admin} />
        </div>
    </Router>
    );
  }
}

export default App;
