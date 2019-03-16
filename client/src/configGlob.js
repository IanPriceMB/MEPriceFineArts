// general config goes here
const configGlob = {};

// production specific config goes here
const configProd = {
  API_URI: "http://www.example.com/api/v2"
};
// development specific config goes here
const configDev = {
  API_URI: "http://localhost:3000"
};
// merged config

let config;
if(process.env.NODE_ENV === 'production'){
  config = { ...configGlob, ...configProd};
} 
else {
  config = { ...configGlob, ...configDev};
};

export default config;