/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '../../controllers/index.controller';

const userRouter: Router = express.Router();

userRouter.get('/book/:bookId', controllerContainer.getABook);

export {userRouter};
