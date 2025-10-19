const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json(users);
});

const getUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user){
        return next(new AppError("User can't be found", 404))
    }

    res.status(200).json(user);
});

const deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user){
        return next(new AppError("User can't be found", 404))
    }

    await User.findByIdAndDelete(id);

    res.status(204).send();
});

const updateUserRole = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user){
        return next(new AppError('User Not found!', 404))
    }

    user.role = 'admin';

    await user.save();

    res.status(200).json(user);
});

module.exports = { getUsers, getUser, deleteUser, updateUserRole }