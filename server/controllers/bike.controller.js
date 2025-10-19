const Bike = require("../models/bike.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getBikes = catchAsync(async (req, res) => {
    const { section } = req.query;

    if(section === 'hero'){
        const bikes = await Bike.find({ homePageSection: 'hero' }).limit(2);
        return res.status(200).json(bikes);
    }

    if(section === 'featured'){
        const bikes = await Bike.find({ homePageSection: 'featured' }).limit(2);
        return res.status(200).json(bikes);
    }
    
    const bikes = await Bike.find();
    res.status(200).json(bikes);
});

const getBike = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const bike = await Bike.findById(id);

    if(!bike){
        return next(new AppError('The bike can not be found', 404))
    }

    res.status(200).json(bike);
});

const createBike = catchAsync(async (req, res) => {
    const { name, brand, type, price, description, images, stock, rating, reviews, createdBy, homePageSection } = req.body;

    const newBike = await Bike.create({
        name,
        brand,
        type,
        price,
        description,
        images,
        stock,
        rating,
        reviews,
        createdBy,
        homePageSection
    });

    res.status(201).json(newBike);
});

const updateBike = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, brand, type, price, description, images, stock, rating, homePageSection } = req.body;

    const bike = await Bike.findById(id);

    if(!bike){
        return next(new AppError('The bike can not be found', 404))
    }

    const updatedBike = await Bike.findByIdAndUpdate(id, { $set: {
        name, brand, type, price, description, images, stock, rating, homePageSection
    }}, { new : true } );

    res.status(200).json(updatedBike);
});

const deleteBike = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const bike = await Bike.findByIdAndDelete(id);

    if(!bike){
        return next(new AppError('The bike can not be found', 404))
    }

    res.status(204).send();
});

module.exports = { getBikes, getBike, createBike, updateBike, deleteBike };