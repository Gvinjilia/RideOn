const express = require('express');
const { getReviews, getReview, addReview, removeReview } = require('../controllers/review.controller');
const { protect, allowedTo } = require('../middleware/auth.middleware');

const reviewRouter = express.Router();

reviewRouter.route('/').get(protect, getReviews);
reviewRouter.route('/:bikeId').get(protect, getReview).post(protect, addReview);
reviewRouter.route('/:reviewId').delete(protect, allowedTo('admin'), removeReview);

module.exports = reviewRouter;