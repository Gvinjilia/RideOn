const mongoose = require('mongoose');

const reviewShema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bikeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Bike',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        minLength: [15, 'The minimum length of the comment is 15 characters'],
        maxLength: [200, 'The maximum length of the comment is 200 characters']
    }
});

const Review = mongoose.model('Review', reviewShema);

module.exports = Review;