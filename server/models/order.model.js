const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bikes: [{
        bikeId: {
            type: mongoose.Types.ObjectId,
            ref: 'Bike'
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
        }
    }],
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required']
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required']
    },
    paymentStatus: {
        type: String,
        enum: ['not paid', 'pending', 'paid', 'failed'],
        default: 'not paid'
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    },
    shipped: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: [true, 'address field is required']
    },
    delivery: {
        type: Date,
        default: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }
}, {timestamps: true});

const Order = mongoose.model('Orders', OrderSchema);

module.exports = Order;