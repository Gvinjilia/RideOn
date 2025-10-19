const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/email");

const signToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user);

    res.cookie('lt', token, {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'dev' ? false : true,
        httpOnly: true,
        sameSite: 'Lax'
    });

    res.status(statusCode).json({
        status: 'success',
        data: {
            user
        }
    });
};

const signup = catchAsync(async (req, res) => {
    const { fullname, email, password } = req.body;

    const newUser = await User.create({
        fullname,
        email,
        password
    });

    const code = newUser.createVerificationCode();

    await newUser.save({ validateBeforeSave: false });

    const url = `${req.protocol}://${req.get("host")}/api/auth/verify/${code}`;

    sendEmail(email, 'Hello From RideOn', `
        <div style="display: flex; margin-left: 50px; flex-direction: column; gap: 5px">
                <h2 style="font-family: Arial, sans-serif;">RideOn</h2>
                <h1 style="font-family: Arial, sans-serif;">Welcome to <br /> RideoOn!</h1>
                <p style="font-family: Arial, sans-serif; font-size: 14px">Your space to ride, explore, and connect. Whether <br /> you're sharing your latest trail or discovering <br /> new gear, RideOn is where cycling stories come to life.</p>
                <p style="font-family: Arial, sans-serif; font-size: 14px">Click the button bellow to verify email</p>
                <button style="background-color: black; border: none; padding: 10px; width: 100px; border-radius: 5px"><a href='${url}' 
                style="text-decoration: none; color: white">Verify Email</a></button>
            </div>`);

    res.status(201).json(newUser);
});

const verifyEmail = catchAsync(async (req, res, next) => {
    const { code } = req.params;

    const user = await User.findOne({ verificationCode: code });

    if(!user){
        return next(new AppError('The code is incorrect', 400))
    }

    user.isVerified = true;
    user.verificationCode = undefined;

    await user.save();

    res.status(200).send('<h1>User verified</h1>');
});

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select('+password');

    if(!user){
        return next(new AppError('email or password is incorrect', 404))
    }

    const correct = await user.comparePasswords(password, user.password);

    if(!correct){
        return next(new AppError('email or password is incorrect', 404));
    }

    user.password = undefined;

    createSendToken(user, 201, res);
});

const logout = catchAsync(async (req, res, next) => {
    res.clearCookie('lt', {
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "dev" ? false : true,
        httpOnly: true,
        sameSite: "Lax"
    });

    res.status(200).json('logged out successfully');   
})

const autoLogin = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    res.status(200).json(user);
});

module.exports = { signup, login, verifyEmail, autoLogin, logout };