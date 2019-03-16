const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');


router.post('/login', UsersController.users_login_user);


module.exports = router;