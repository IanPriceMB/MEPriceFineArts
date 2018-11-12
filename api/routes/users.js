const express = require('express');
const router = express.Router();
//const checkAuth = require('../auth/check-auth');

const UsersController = require('../controllers/users');

// Currently disabled as we only have one (1) Admin that is
// ever logging in.

//router.post('/signup', UsersController.users_signup_user);

router.post('/login', UsersController.users_login_user);

// There is no reason to have the Admin able to delete themselves
// therefor the delete is currently disabled.

//router.delete('/:userId', checkAuth, UsersController.users_delte_user);

module.exports = router;