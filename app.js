const express = require('express');
const app = express();
//to show info in terminal
const morgan = require('morgan');
//to make the data a readable format
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//the routes the project
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/MEPriceFineArt",{ useNewUrlParser: true });

//this is for displaying info in the terminal
app.use(morgan('dev'));

//make the pics publicly available
app.use('/uploads', express.static('uploads'));

//i want to parse url encoded bodies true for rich bodies false for simple ones
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//headers allow cors to be bypassed in restful apis
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    //OPTIONS  request iss ent first to see fi this kind of request can be made
    if(req.method === 'OPTIONS'){
        //these are the methods the browser may send
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        //we use return because we dont want to continue to the next middleware
        //we just wanted to figure out what we coudl use
        return res.status(200).json({})
    }
    next();
});

//routes which should handle requrests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

//if it never hit the above routes 404 for not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    //send error on to next middleware
    next(error);
})

//if any error occurs display the message and the status code 500 for general erroring
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;