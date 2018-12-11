export default {
    //get all images
    getAllProducts: function(){
        return fetch('/products', {
            method: "GET"
        });
    },
    loginAdmin: function(adminData){
        return fetch('/user/login', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        });
    },
    newProduct: function(token, data){
        return fetch(`/products`, {
            method: "POST",
            headers: {
                'Authorization': `${token}`
            }, 
            body: data
        });
    },
    getOneProduct: function(id){
        return fetch('/products/' + id,{
            method: "GET"
        });
    }
};