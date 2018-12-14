import React, {Component} from 'react';
import API from '../utils/API';
import './css/MainPage.css';

class MainPage extends Component {

  state = {
    display: 'Home',
    images: null
  };

  setBackground = image => {

  };

  setDisplay = location => {
    this.setState({display: location})
  };

  componentDidMount() {
    this.loadImages();
  };

  loadImages = () => {
    API.getAllProducts()
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(res => {
      this.setState({
        images: res
      }); 
      console.log(res);
    })
    .catch(err => console.log(err))
  };

  render(){
    return(
      <div className="MainPage">
        <header>
            <h1>M.E. Price Fine Art</h1>
            <nav>
              <h2 onClick={() => this.setDisplay('Home')}>Home</h2>
              <h2 onClick={() => this.setDisplay('Gallery')}>Gallery</h2>
              <h2 onClick={() => this.setDisplay('About')}>About</h2>
              <h2 onClick={() => this.setDisplay('Contact')}>Contact</h2>
          </nav>
        </header>
        {this.state.display === 'Gallery' ?(
          <div className="Gallery">
            {(this.state.images.products).map((image, i) => (
                <img src={image.productImage} alt={image.name} />
            ))}
          </div>):(<div></div>)}
    </div>
  )
  // res different pages based on state
  // if(this.state.display == 'Home' || null){
      
  // }

  // if(this.state.display == 'Gallery'){
      
  // }
  // if(this.state.display == 'About'){
      
  // }
  // if(this.state.display == 'Contact'){
      
  // }
  }

}
export default MainPage;