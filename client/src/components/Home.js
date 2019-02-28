import React, { Component } from 'react';
import titleImage from '../staticFiles/Pillows.png';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className='shaped' src={titleImage} alt='banner'/>
      </div>
    );
  }
}

export default Home;