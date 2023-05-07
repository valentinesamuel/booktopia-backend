/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const userRouter: Router = express.Router();

userRouter.get('/user_profile', controllerContainer.getUserDetail);
userRouter.get('/wishlist', controllerContainer.getWishlist);
userRouter.get('/cart', controllerContainer.getCartItems);
userRouter.get('/search', controllerContainer.searchBook);
userRouter.get('/books', controllerContainer.getAllBooks);
userRouter.get('/book/:bookId', controllerContainer.getABook);
userRouter.get('/genre/:genreName', controllerContainer.getAGenreBooks);
userRouter.get('/shop', controllerContainer.getAllBooks);
userRouter.get('/shop/filter', controllerContainer.filterProducts);
userRouter.get('/orders', controllerContainer.getOrders);
userRouter.get('/subscribe', controllerContainer.getBookSubscription);

userRouter.post('/subscribe', controllerContainer.addBookSubscription);

userRouter.put('/user_profile', controllerContainer.updateUserDetail);
userRouter.put('/wishlist', controllerContainer.updateWishlist);
userRouter.put('/cart', controllerContainer.updateCart);

export {userRouter};
