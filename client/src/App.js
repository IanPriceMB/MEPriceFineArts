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
  constructor(props){
    super(props)
    this.state = {
      location: 'Home'
    };
  };

  changeLocation = location => {
    this.setState({location});
  };

  componentDidMount(){
    if(window.location.pathname === '/Admin' || window.location.pathname === '/admin'){
      this.changeLocation('Admin');
    };
  };

  render() {
    return (
      <div className="App">
        {this.state.location === 'Admin' ? null :
        <Header click={this.changeLocation}></Header>}

        {this.state.location === 'Home' ? 
        (<Homepage click={this.changeLocation}></Homepage>) :
        this.state.location === 'About' ?
        (<About></About>) :
        this.state.location === 'Gallery' ?
        (<Gallery></Gallery>) :
        this.state.location === 'Contact' ?
        (<Contact></Contact>) : 
        this.state.location === 'Admin' ?
        (<Admin></Admin>) : (null)}
      </div>
    );
  };
};

export default App;
