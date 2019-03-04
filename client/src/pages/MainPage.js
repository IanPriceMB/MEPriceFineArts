import React, {Component} from 'react';
import './css/MainPage.css';
import Header from '../components/Header';

class MainPage extends Component {

  

  render(){
    return(
      <div className="MainPage">
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}
export default MainPage;