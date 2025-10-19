const express = require('express');
const { signup, login, verifyEmail, autoLogin, logout } = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

const authRouter = express.Router();

authRouter.route('/signup').post(signup);
authRouter.route('/login').post(login);

authRouter.get('/verify/:code', verifyEmail);

authRouter.get('/autoLogin', protect, autoLogin);

authRouter.post('/logout', protect, logout);

module.exports = authRouter;