import React, {Component} from 'react';
import API from '../utils/API';
import './css/MainPage.css';
import titleImage from '../staticFiles/Pillows.png'

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
              <h2 onClick={() => this.setDisplay('About')}>About</h2>
              <h2 onClick={() => this.setDisplay('Gallery')}>Gallery</h2>
              <h2 onClick={() => this.setDisplay('Contact')}>Contact</h2>
              <h2 onClick={() => this.setDisplay('Archives')}>Archives</h2>
          </nav>
        </header>
        {this.state.display === 'Home' ?(
          <div className="Home">
          <img className='shaped' src={titleImage} alt='title image'/>
          </div>):
          this.state.display === 'Gallery' ?(
          <div className="Gallery">
            {(this.state.images.products).map((image, i) => (
                <img src={image.productImage} alt={image.name} />
            ))}
          </div>):
          (this.state.display === 'About' ? (
          <div className="About">
              {/* <div className='shaped'></div> */}
              <p>
                I was born in Ohio, in the 1950’s and traveled the world during my youth as the son of a serviceman. 
                With extended stays in places like the Azores, Greece and later, the United Kingdom while in high school, 
                I gained an appreciation for history and the arts. My travels continue to this day all of which provides me 
                with an appreciation of the diverse nature of our planet and its many forms of artistic expression. 
              </p>
              <p>
                I have long followed the adage to “draw or paint what you see, not what you know is there.” I have used 
                that to focus upon the development of my skills to a high level. For me, creating is about telling a story 
                in a concise fashion. Most of what I paint are abstracted landscapes and memories of places to which I have traveled. 
              </p>
              <p>
                I had the first exhibition of my work in my early twenties and have participated in and won awards for my 
                work around the country. I continue to do group, private study and workshops as well as belong to the Plein Air 
                Artists of Colorado. I did my undergraduate studies at the University of Denver and later, earned a master’s
                degree from the University of Colorado at Denver.
              </p>
              <p>
                I have been fortunate to be able to share my artistic explorations with my wife and our two grown 
                children and my journey continues each and every day I enter my studio.
              </p>
          </div>):
          (this.state.display === 'Contact' ? (
          <div>

          </div>):
          (<div></div>)))}
    </div>
  )
  }
}
export default MainPage;