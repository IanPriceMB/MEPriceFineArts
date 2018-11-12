const express = require('express');
const router = express.Router();
const checkAuth = require('../auth/check-auth');

const OrdersController = require('../controllers/orders')

// This file is not currently in use.
// It is simply here in case the Contractor wishes to add
// the ability to make purchases through their site at a later date.

// router.get('/', OrdersController.orders_get_all);

// router.post('/', OrdersController.orders_create_order);

// router.get('/:orderId', OrdersController.orders_get_order);

// router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;