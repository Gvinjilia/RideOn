const Bike = require("../models/bike.model");
const Review = require("../models/review.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getReviews = catchAsync(async (req, res) => {
    const reviews = await Review.find();

    res.status(200).json(reviews);
});

const getReview = catchAsync(async (req, res, next) => {
    const { bikeId } = req.params;

    const bike = await Bike.findById(bikeId);

    if(!bike){
        return next(new AppError('bike not found', 404))
    }

    res.status(200).json(bike.reviews);
});

const addReview = catchAsync(async (req, res, next) => {
    const { bikeId } = req.params;
    const { reviews, rating, comment } = req.body;

    const bike = await Bike.findById(bikeId);

    if(!bike){
        return next(new AppError('bike not found', 404))
    }

    const bikeReviews = await Review.create({
        userId: req.user._id,
        bikeId,
        reviews,
        rating,
        comment
    });

    res.status(201).json(bikeReviews);
});

const removeReview = catchAsync(async (req, res, next) => {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);

    if(!review){
        return next(new AppError('bike not found', 404));
    }

    await Review.findByIdAndDelete(reviewId);

    res.status(204).send();
});

module.exports = { getReviews, getReview, addReview, removeReview };