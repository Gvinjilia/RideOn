const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userShema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique']
    },

    photo: String,

    role: {
        enum: ['user', 'admin'],
        default: 'user',
        type: String
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String
    }
}, { timestamps: true });

userShema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    this.password = await bcrypt.hash(this.password, 12);

    next();
});

userShema.methods.comparePasswords = async (candidate, password) => {
    return await bcrypt.compare(candidate, password);
};

userShema.methods.createVerificationCode = function(){
    const code = crypto.randomBytes(12).toString('hex');

    this.verificationCode = code;

    return code;
};

const User = mongoose.model('Users', userShema);

module.exports = User;