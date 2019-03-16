import config from '../configGlob';
console.log(config)
export default {
  //get all images
  getAllProducts: function(){
    return fetch(`${config.API_URI}/products`, {
      method: "GET"
    });
  },
  loginAdmin: function(adminData){
    return fetch(`${config.API_URI}/user/login`, {
      method: "POST", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(adminData)
    });
  },
  newProduct: function(token, data){
    return fetch(`${config.API_URI}/products`, {
      method: "POST",
      headers: {
        'Authorization': `${token}`
      }, 
      body: data
    });
  },
  getOneProduct: function(id){
    return fetch(`${config.API_URI}/products${id}`,{
      method: "GET"
    });
  }, 
  deleteProduct: function(token, id){
    return fetch(`${config.API_URI}/products${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `${token}`
      }
    });
  },
  updateProduct: function(token, data, id){
    return fetch(`${config.API_URI}/products${id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(data)
    });
  }
};