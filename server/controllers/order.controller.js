const Cart = require("../models/cart.model");
const Order = require("../models/order.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getToOrder = catchAsync(async (req, res, next) => {
    const { paymentMethod, address } = req.body;
    const cart = await Cart.findOne({ userId: req.user._id });

    const bikesArr = [...cart.bikes];

    const totalPrice = bikesArr.reduce((acc, curValue) => acc + curValue.price * curValue.quantity, 0);

    let paymentStatus = paymentMethod === 'cash' ? 'not paid' : 'pending';
    let orderStatus = 'pending';

    if(cart.bikes.length === 0){
        return next(new AppError('Cart is empty', 400));
    };

    const order = await Order.create({
        userId: req.user._id,
        bikes: cart.bikes,
        totalPrice,
        paymentMethod,
        paymentStatus,
        orderStatus,
        address,
        shipped: false
    });

    cart.bikes = [];

    await cart.save();

    res.status(201).json({
        status: 'success',
        message: `order is ${order.status}, shipped: ${order.shipped}`,
        order
    });
});

const getOrders = catchAsync(async (req, res, next) => {
    const orders = await Order.find({ userId: req.user._id });

    res.status(200).json(orders);
});

const getOrder = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findOne({ _id: id, userId: req.user._id });

    if(!order){
        return next(new AppError("order can't be found", 404));
    }

    res.status(200).json(order);
});

const getAllUsersOrders = catchAsync(async (req, res, next) => {
    const allUsersOrders = await Order.find();

    res.status(200).json(allUsersOrders);
});

const updateOrderToShipped = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findById({ _id: id });

    if(!order){
        return next(new AppError("order can't be found", 404))
    };

    order.orderStatus = 'shipped';
    order.shipped = true;

    if(order.paymentMethod === 'cash'){
        order.paymentStatus = 'paid';
    }

    await order.save();

    res.status(200).json({
        status: 'success',
        message: 'order status changed to shipped',
        order
    });
});

module.exports = { getToOrder, getOrders, getOrder, updateOrderToShipped, getAllUsersOrders };