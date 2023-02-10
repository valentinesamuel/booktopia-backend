/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../controllers/index.controller';

const userRouter: Router = express.Router();

userRouter.get('/books', controllerContainer.getAllBooks);
userRouter.get('/book/:bookId', controllerContainer.getABook);
userRouter.get('/genre/:genreName', controllerContainer.getAGenreBooks);
userRouter.get('/search', controllerContainer.searchBook);
userRouter.get('/shop', controllerContainer.getAllBooks);

export {userRouter};
