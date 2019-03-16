import React, { Component } from 'react';
import API from '../utils/API';

import config from '../configGlob';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

  componentWillMount() {
    this.loadImages();
  };

  loadImages = () => {
    API.getAllProducts()
    .then(data => data.json())
    .then(images => {this.setState({images}); 
      console.log(images);
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="Gallery">
        {this.state.images ? ((this.state.images.products).map((image, i) => (
          <img src={`${config.API_URI}/${image.productImage}`} alt={image.name} key={i} />
        ))): <div>Loading images...</div>}
    </div>
    );
  }
}

export default Gallery;