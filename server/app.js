const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bikeRouter = require('./routers/bike.router');
const globalErrorHandler = require('./controllers/error.controller');
const authRouter = require('./routers/auth.router');
const cookieParser = require('cookie-parser');
const cartRouter = require('./routers/cart.router');
const orderRouter = require('./routers/order.router');
const reviewRouter = require('./routers/review.router');
const cors = require('cors');
const userRouter = require('./routers/user.router');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.static(path.join(__dirname, 'dist')))

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(cookieParser());
app.use(express.json());

app.use('/api/bikes', bikeRouter);
app.use('/api/auth', authRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/users', userRouter);

app.use(globalErrorHandler);

mongoose.connect(process.env.DATABSE_URL)
    .then(() => {
        console.log('connected to mongoDB');

        app.listen(process.env.PORT, () => {
            console.log('The server is running on port', process.env.PORT)
        });
    })
    .catch(err => {
        console.log('Error', err);

        process.exit(1);
    });