const Product = require('../models/product');
const mongoose = require('mongoose');

exports.products_get_all = (req, res, next) => {
    //where and limit to select further see docs
    Product.find()
    .select('name price _id productImage description')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    name: doc.name, 
                    price: doc.price,
                    productImage: doc.productImage,
                    description: doc.description,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/'+ doc._id
                    }
                };
            })
        };
        if (docs.length >= 0){
        res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'no entries found'
            });
        };
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.products_create_product = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path,
        description: req.body.description
    });
    product.save().then( result => {
        res.status(201).json({
            message: 'Created product',
            createdProduct: {
                name: result.name,
                price: result.price,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.products_get_product = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .select('name price _id productImage description')
    .exec()
    .then(doc => {
        console.log('from database ' + doc);
        if(doc){
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: 'no valid entry found for provided ID'})   
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.products_delete_product = (req, res, next) => {
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.products_update_product = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};

    // Dynamically determine what to update
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value
    }
    Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};
