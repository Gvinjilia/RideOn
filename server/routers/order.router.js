const express = require('express');
const { protect, allowedTo } = require('../middleware/auth.middleware');
const { getToOrder, getOrders, getOrder, updateOrderToShipped, getAllUsersOrders } = require('../controllers/order.controller');
const orderRouter = express.Router();

orderRouter.route('/').post(protect, getToOrder);
orderRouter.route('/history').get(protect, getOrders);
orderRouter.route('/:id').get(protect, getOrder);
orderRouter.route('/').get(protect, allowedTo('admin'), getAllUsersOrders);
orderRouter.route('/:id/ship').patch(protect, allowedTo('admin'), updateOrderToShipped);

module.exports = orderRouter;