const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const checkAuth = require('../auth/check-auth');

const path = require('path');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const ProductsController = require('../controllers/products');

// This is for storing the files in a local folder
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

// This limits the types of files that can be uploaded
const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/MEPriceFineArt";

// const storage2 = new GridFsStorage({
//     url: "mongodb://localhost/MEPriceFineArt",
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
// const upload2 = multer({ storage }).single('picture');

// The multer package allows us to upload files 
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('picture');

// Routes for /products
router.get('/', ProductsController.products_get_all);

router.post('/', upload, checkAuth, ProductsController.products_create_product);

router.get('/:productId', ProductsController.products_get_product);

router.delete('/:productId', checkAuth, ProductsController.products_delete_product);

router.patch('/:productId', checkAuth, ProductsController.products_update_product);  

module.exports = router;
