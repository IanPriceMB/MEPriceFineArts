import React, {Component} from 'react';
import API from '../utils/API';

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
        .then(res => {this.setState({images: res.data}); console.log(res);})
        .catch(err => console.log(err))
    };

    render(){
        return(
            <div>
                <header>
                    <h1>M.E. Price Fine Art</h1>
                </header>
                <div>
                    <h2 className="link-item" onClick={() => this.setDisplay('Home')}>Home</h2>
                    <h2 className="link-item" onClick={() => this.setDisplay('Gallery')}>Gallery</h2>
                    <h2 className="link-item" onClick={() => this.setDisplay('About')}>About</h2>
                    <h2 className="link-item" onClick={() => this.setDisplay('Contact')}>Contact</h2>
                </div>
                {this.state.display === 'Gallery' ?(
                    <div>
                        <ul>
                            {(this.state.images.products).map((image, i) => (
                                <li key={i}>{image.name}</li> 
                            ))}
                        </ul>
                        {(this.state.images.products).map((image, i) => (
                            <img key={i} src={image.request.url} alt='title'/> 
                        ))}
                    </div>):(<div></div>)}
                {this.state.display === 'Home'? (
                    <button>hit me</button>
                ):(<div></div>)}
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