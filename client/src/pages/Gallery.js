import React, { Component } from 'react';
import API from '../utils/API';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.loadImages();
  };

  loadImages = () => {
    API.getAllProducts()
    .then(data => data.json())
    .then(res => {
      this.setState({
        images: res
      }); 
      console.log(res);
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="Gallery">
        {(this.state.images.products).map((image, i) => (
          <img src={image.productImage} alt={image.name} />
        ))}
    </div>
    );
  }
}

export default Gallery;