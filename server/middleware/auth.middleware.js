const User = require("../models/user.model");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
    try {
        const token = req.cookies?.lt;

        if(!token){
            return next(new AppError('you are not authorized!', 401));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return next(new AppError('token is inavlid', 401));
        }

        const user = await User.findById(decoded.id);

        if(!user){
            return next(new AppError('user does not exist', 401));
        }

        req.user = user;

        next();
    } catch(error){
        console.error("Auth Middleware Error:", error.message);

        // Handle token expiration separately
        if (error.name === "TokenExpiredError") {
            return next(new AppError("you authorization time has expired", 401));
        }

        return next(new AppError("you are not authorized!", 401));
    }
};

const allowedTo = (...roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        
        if(!roles.includes(userRole)){
            return next(new AppError("You can't have access to this specific routes"));
        }

        next();
    }
};

module.exports = { protect, allowedTo };