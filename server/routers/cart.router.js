const express = require('express');
const { protect } = require('../middleware/auth.middleware');
const { addBike, getBikes, deleteBike, clearCart } = require('../controllers/cart.controller');

const cartRouter = express.Router();

cartRouter.route('/').post(protect, addBike).get(protect, getBikes);
cartRouter.route('/clear').delete(protect, clearCart);
cartRouter.route('/:id').delete(protect, deleteBike);

module.exports = cartRouter;