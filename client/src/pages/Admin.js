import React, {Component} from 'react';
import API from '../utils/API';

class Admin extends Component {

  state = {
      password: 'Mike Price',
      email: 'meprice@gmail.com',
      Admin: null,
      adminLoaded: false,
      name: '',
      price: 0,
      description: '',
      products: []
  };

  handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
    
  login = (event) => {
      event.preventDefault();

      let formData = new FormData((event.target).parentNode);

      let object = {};
      formData.forEach(function(value, key){
        object[key] = value;
      });

      API.loginAdmin(object)
      .then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then(res => {
          if(res.message === 'Auth Successful'){
              this.setState({adminLoaded: true, Admin: res}); 

              this.getProducts();
          }
      })
      .catch(err => console.log(err));
  };

  logout = (event) => {
    event.preventDefault();

    this.setState({adminLoaded: false, Admin: null})
  };

  newProduct = (event) => {
    event.preventDefault();
    
    let formData = new FormData((event.target).parentNode);

    API.newProduct( this.state.Admin.token, formData)
    .then(res => {
      console.log(res); 
      document.querySelector("form").reset();
      this.getProducts();
    })
    .catch(err => console.log(err));
  };

  getProducts = () => {
    API.getAllProducts()
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(res => {
      this.setState({products: res});
      console.log(this.state.products);
      })
    .catch(err => console.log(err));
  };

  deleteProduct = (id) => {
    API.deleteProduct(this.state.Admin.token, id)
    .then(res => this.getProducts())
    .catch(err => console.log(err));
  }

  updateProduct = (event, id) => {
    event.preventDefault();

    let formData = new FormData((event.target).parentNode);
    let object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });

    API.updateProduct(this.state.Admin.token, object, id)
    .then(res => this.getProducts())
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="admin">
      {!this.state.adminLoaded ? (
        <form>
          Email:<br/>
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          <br/>            
          Password:<br/>
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
          <br/>
          <button className="login" onClick={(e) => this.login(e)}>Login</button>
        </form>
      ):
      (
      <div className="container">
        <h1>Welcome back!</h1>
        <div className="admin-form">
          <h3>Upload A New Piece</h3>
          <form>
            Title of the Piece:<br/>
            <input type="text" name="name" value={this.state.title} onChange={this.handleInputChange} />
            <br/>
            Price of the Piece (currently not in use):<br/>
            <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
            <br/>
            Description for the Piece:<br/>
            <textarea name="description" rows="10" cols="50" />
            <br/>
            Choose the file (jpeg/png):
            <input type="file" name="picture" />
            <br/><br/>
            <button onClick={(e) => this.newProduct(e)}>submit</button>
          </form>
        </div>
        {this.state.products.count > 0 ? (
            <div className="allPieces">
            {(this.state.products.products).map( product => (
              <div key={product._id}>
                <img src={product.productImage} alt={product.name} />
                <form>
                  Title of the Piece:<br/>
                  <input type="text" name="name" value={this.state.uname} onChange={this.handleInputChange} /><br/>
                  Current title: {product.name}
                  <br/>
                  Price of the Piece (currently not in use):<br/>
                  <input type="number" name="price" value={this.state.uprice} onChange={this.handleInputChange} /><br/>
                  Current Price: {product.price}
                  <br/>
                  Description for the Piece:<br/>
                  <textarea name="description" rows="10" cols="50" value={this.state.udescription} onChange={this.handleInputChange} /><br/>
                  Current Description: {product.description}
                  <br/>
                  <button onClick={(e) => this.updateProduct(e, product._id)}>update</button>
                </form>
                <button onClick={() => this.deleteProduct(product._id)}>Delete</button>
              </div>
            ))}
            </div>
        ):(<div></div>)}
        <footer>
          <button className="logout" onClick={(e) => this.logout(e)}>Logout</button>
        </footer>
      </div>
      )}
      </div>
    )
};
}
export default Admin;

