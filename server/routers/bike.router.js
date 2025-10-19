const express = require('express');
const { createBike, getBikes, getBike, updateBike, deleteBike } = require('../controllers/bike.controller');
const { protect, allowedTo } = require('../middleware/auth.middleware');

const bikeRouter = express.Router();

bikeRouter.route('/').post(protect, allowedTo('admin'), createBike).get(protect, allowedTo('user', 'admin'), getBikes);
bikeRouter.route('/:id').get(protect, allowedTo('user', 'admin'), getBike).patch(protect, allowedTo('admin'), updateBike).delete(protect, allowedTo('admin'), deleteBike);

module.exports = bikeRouter;