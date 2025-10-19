const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    bikes: [{
        bikeId: {
            type: mongoose.Types.ObjectId,
            ref: 'Bike',
            required: [true, 'bikeId is required']
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number
        },
        images: [String],
        brand: {
            type: String
        },
        name: {
            type: String
        },
        type: {
            type: String
        }
    }]
}, { timestamps: true });

const Cart = mongoose.model('Item', CartSchema);

module.exports = Cart;