/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const userRouter: Router = express.Router();

userRouter.get('/signin', controllerContainer.signInUser);
userRouter.get('/signup', controllerContainer.signUpUser);
userRouter.get('/:userId', controllerContainer.getUserDetail);
userRouter.get('/:userId/wishlist', controllerContainer.getWishlist);
userRouter.get('/:userId/cart', controllerContainer.getCartItems);
userRouter.get('/books', controllerContainer.getAllBooks);
userRouter.get('/book/:bookId', controllerContainer.getABook);
userRouter.get('/genre/:genreName', controllerContainer.getAGenreBooks);
userRouter.get('/search', controllerContainer.searchBook);
userRouter.get('/shop', controllerContainer.getAllBooks);
userRouter.get('/shop/filter', controllerContainer.filterProducts);
userRouter.get('/orders', controllerContainer.getOrders);
userRouter.get('/:userId/subscribe', controllerContainer.getBookSubscription);

userRouter.post('/:userId/subscribe', controllerContainer.addBookSubscription);

userRouter.put('/:userId', controllerContainer.updateUserDetail);
userRouter.put('/:userId/wishlist', controllerContainer.updateWishlist);
userRouter.put('/:userId/cart', controllerContainer.updateCart);

export {userRouter};
