import React, { Component } from 'react';

// Pages
import Admin from "./pages/Admin";
import Homepage from "./pages/Home";
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Components
import Header from './components/Header'


class App extends Component {
  constructor(){
    this.state = {
      location: 'Home'
    };
  };

  changeLocation = location => {
    this.setState({location})
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        {this.state.location == 'Home' ? 
        <Homepage></Homepage> :
        this.state.location == 'About' ?
        <About></About> :
        this.state.location == 'Gallery' ?
        <Gallery></Gallery> :
        this.state.location == 'Contact' ?
        <Contact></Contact> : 
        this.state.location == 'Admin' ?
        <Admin></Admin> : null}
      </div>
    );
  };
};

export default App;
