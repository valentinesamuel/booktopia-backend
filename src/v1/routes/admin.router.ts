/* eslint-disable @typescript-eslint/no-misused-promises */
import express, {Router} from 'express';
import { controllerContainer } from '../controllers/index.controller';

const adminRouter: Router = express.Router();

adminRouter.post('/book', controllerContainer.adminAddBook);

adminRouter.get('/search', controllerContainer.adminSearchBook);
adminRouter.get('/books', controllerContainer.adminGetBooks);
adminRouter.get('/book/:bookid', controllerContainer.adminGetBook);
adminRouter.get('/genre/:genreName', controllerContainer.adminGetGenreBooks);
adminRouter.get('/subscriptions', controllerContainer.adminGetSubscriptions);
adminRouter.get(
	'/:email/subscriptions',
	controllerContainer.adminGetUserBookSubscriptions
);
adminRouter.get('/orders', controllerContainer.adminGetOrders);
adminRouter.get('/users', controllerContainer.adminGetUsers);
adminRouter.get('/donations', controllerContainer.adminGetDonations);
adminRouter.get('/:userId', controllerContainer.adminGetUser);
adminRouter.get('/:userId/cart', controllerContainer.adminGetUserCartItems);
adminRouter.get('/:userId/orders', controllerContainer.adminGetUserOrder);

adminRouter.put('/book/:bookid', controllerContainer.adminUpdateBook);

adminRouter.delete('/book/:bookid', controllerContainer.adminDeleteBook);

export {adminRouter};
