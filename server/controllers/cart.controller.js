const Cart = require("../models/cart.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const addBike = catchAsync(async (req, res, next) => {
    const { bikes } = req.body;

    let userCart = await Cart.findOne({ userId: req.user._id });

    if(!userCart){
        userCart = await Cart.create({
            userId: req.user._id,
            bikes
        });
    } else {
        for(let i of bikes){
            const bikeExists = userCart.bikes.find((bike) => bike.bikeId.toString() === i.bikeId.toString());

            if(bikeExists){
                bikeExists.quantity += i.quantity || 1;
            } else {
                userCart.bikes.push(i);
            }
        }
    }

    await userCart.save();

    res.status(201).json({
        status: 'success',
        message: 'Bike successfully added to cart',
        data: {
            userCart,
            totalPrice: userCart.bikes.reduce((acc, bike) => acc + bike.price * bike.quantity, 0)
        }
    });
});

const getBikes = catchAsync(async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user._id });

    const totalPrice = cart.bikes.reduce((acc, curValue) => acc + (curValue.price * curValue.quantity), 0).toFixed(2);

    res.status(200).json({ bikes: cart.bikes, totalPrice });
});

const deleteBike = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const cart = await Cart.findOne({ userId: req.user._id });

    if(!cart){
        return next(new AppError('Cart is not found', 404));
    }

    const bikeExists = cart.bikes.find((bike) => bike.bikeId.toString() === id);

    if(bikeExists){
        if(bikeExists.quantity > 1){
            bikeExists.quantity -= 1;
        } else {
            cart.bikes = cart.bikes.filter((bike) => bike.bikeId.toString() !== id);
        }
    }

    await cart.save();

    res.status(200).json({
        status: 'success',
        cart,
        totalPrice: cart.bikes.reduce((acc, bike) => acc + bike.price * bike.quantity, 0)
    });
});

const clearCart = catchAsync(async (req, res, next) => {
    const cart = await Cart.findOne({ userId: req.user._id });

    if(!cart){
        return next(new AppError('Cart is not found', 404));
    }

    cart.bikes = [];

    await cart.save();

    res.status(200).json({
        status: 'success',
        message: 'Cart cleared successfully'
    });
});

module.exports = { addBike, getBikes, deleteBike, clearCart };