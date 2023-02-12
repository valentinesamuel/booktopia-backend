/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const userRouter: Router = express.Router();

userRouter.get('/:userId', controllerContainer.getUserDetail);
userRouter.put('/:userId', controllerContainer.updateUserDetail);
userRouter.get('/:userId/wishlist', controllerContainer.getWishlist);
userRouter.put('/:userId/wishlist', controllerContainer.updateWishlist);
userRouter.get('/:userId/cart', controllerContainer.getCartItems);
userRouter.get('/books', controllerContainer.getAllBooks);
userRouter.get('/book/:bookId', controllerContainer.getABook);
userRouter.get('/genre/:genreName', controllerContainer.getAGenreBooks);
userRouter.get('/search', controllerContainer.searchBook);
userRouter.get('/shop', controllerContainer.getAllBooks);
userRouter.get('/shop/filter', controllerContainer.filterProducts);
userRouter.get('/orders', controllerContainer.getOrders);

export {userRouter};
