/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import {controllerContainer} from '@controllers/index.controller';

const authRouter: Router = express.Router();

authRouter.get('/signin', controllerContainer.signInUser);
authRouter.get('/signup', controllerContainer.signUpUser);
authRouter.get('/signout', controllerContainer.signOutUser);

export {authRouter};
