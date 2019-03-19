import React, { Component } from 'react';

// Pages
import Admin from "./pages/Admin";
import Homepage from "./pages/Home";
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Components
import Header from './components/Header/Header'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: 'Home',
      sideDrawerOpen: false
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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    };

    return (
      <div className="App">
        {this.state.location === 'Admin' ? null :
        <Header toggle={this.drawerToggleClickHandler} click={this.changeLocation}></Header>}
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
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
