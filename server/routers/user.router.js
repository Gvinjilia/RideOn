const express = require('express');
const { protect, allowedTo } = require('../middleware/auth.middleware');
const { getUsers, getUser, deleteUser, updateUserRole } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.route('/').get(protect, allowedTo('admin'), getUsers);
userRouter.route('/:id').get(protect, allowedTo('admin'), getUser).delete(protect, allowedTo('admin'), deleteUser).patch(protect, allowedTo('admin'), updateUserRole);

module.exports = userRouter;