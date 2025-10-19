const mongoose = require('mongoose');

const bikeShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required'],
        unique: [true, 'The bike name should be unique'],
    },
    
    brand: {
        type: String,
        required: [true, 'The brand field is required']
    },
    type: {
        type: String,
        required: [true, 'The type field is required']
    },
    price: {
        type: Number,
        required: [true, 'The price field is required'],
        maxPrice: [10000, "The price of the bike can't be more than 10000"]
    },
    description: {
        type: String,
        required: [true, 'The description field is required']
    },
    images: {
        type: [String],
        unique: [true, 'The bike images should be unique'],
        required: [true, 'The images field is required']
    },
    stock: {
        type: Number,
        required: [true, 'The stock field is required']
    },
    rating: {
        type: Number,
        required: [true, 'The rating field is required']
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    }],
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    homePageSection: {
        type: String,
        enum: ['hero', 'featured', 'none'],
        default: 'none'
    }
}, { timestamps: true });

const Bike = mongoose.model('Bikes', bikeShema);

module.exports = Bike;