/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import {v4 as uuidv4} from 'uuid';
import {Request, Response} from 'express';
import {validateSignUpUserData} from '../../validations/user.validation';
import {dbQueryParser} from '../../utils/db_query_paarser';
import {convertQueryStringToObject} from '../../utils/query_parser';
import {errorResponse, successResponse} from '../../utils/response_parser';
import {serviceContainer} from '../services/index.service';
import {encrypt} from '../../../encryption2';

const signInUser = async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const signedInUser = await serviceContainer.signInUserService(user);
		successResponse(res, 'Fetched successfully', signedInUser, 200);
	} catch (error) {
		errorResponse(res, 'Failed to signin the user', error as Error);
	}
};

const signUpUser = async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const encryptedId = encrypt(uuidv4());
		user.user_id = encryptedId;

		const {error, value} = validateSignUpUserData(user);
		if (error) {
			errorResponse(
				res,
				'Error encountered',
				new Error(error.details[0].message),
				404
			);
		} else {
			// const deccryptedId = decrypt(encryptedId);
			// console.log(encryptedId, '<===>', deccryptedId);
			const signedUpUser = await serviceContainer.signInUserService(value);
			successResponse(res, 'Fetched successfully', signedUpUser, 200);
		}
	} catch (error) {
		errorResponse(res, 'Error', error as Error, 404);
	}
};

const getAllBooks = async (_req: Request, res: Response) => {
	try {
		const book = await serviceContainer.getAllBooksService();
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch a book', error as Error);
	}
};

const getABook = async (req: Request, res: Response) => {
	try {
		const bookId = req.params.bookId;
		const book = await serviceContainer.getABookService(bookId);
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch a book', error as Error);
	}
};

const getAGenreBooks = async (req: Request, res: Response) => {
	try {
		const genreName = req.params.genreName;
		const books = await serviceContainer.getAGenreBooksService(genreName);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch books', error as Error);
	}
};

const searchBook = async (req: Request, res: Response) => {
	try {
		const book = req.query.searchstring;
		const books = await serviceContainer.searchService(book as string);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch books', error as Error);
	}
};

const filterProducts = async (req: Request, res: Response) => {
	const requestUrl = req.url;
	const filterUrl = requestUrl.split('?')[1];
	const query = convertQueryStringToObject(filterUrl);
	const dbQuery = dbQueryParser(query);
	console.log(query);
	console.log(dbQuery);
	successResponse(res, 'Fetched successfully', {}, 200);
};

const getOrders = async (req: Request, res: Response) => {
	try {
		const userId = req.query.user;
		const orders = await serviceContainer.getOrdersService(userId as string);
		successResponse(res, 'Fetched successfully', orders, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch a book', error as Error);
	}
};

const getUserDetail = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const userDetail = await serviceContainer.getUserDetailService(userId);
		successResponse(res, 'Fetched Successfully', userDetail, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch user details', error as Error);
	}
};

const updateUserDetail = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const updatedInformation = req.query;
		const userDetail = await serviceContainer.updateUserDetailService(
			userId,
			updatedInformation
		);
		successResponse(res, 'Fetched Successfully', userDetail, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch user details', error as Error);
	}
};

const getWishlist = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const wishlist = await serviceContainer.getWishlistService(userId);
		successResponse(res, 'Fetched Successfully', wishlist, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch user details', error as Error);
	}
};

const updateWishlist = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const wishlistItems = req.body;
		const wishlist = await serviceContainer.updateWishlistService(
			userId,
			wishlistItems
		);
		console.log(wishlistItems);

		successResponse(res, 'Fetched Successfully', wishlist, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch user details', error as Error);
	}
};

const getCartItems = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const cartItems = await serviceContainer.getCartItemsService(userId);
		successResponse(res, 'Fetched Successfully', cartItems, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch cart items', error as Error);
	}
};

const updateCart = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const cartItems = req.body;
		const cart = await serviceContainer.updateCartService(userId, cartItems);
		console.log(cart);
		successResponse(res, 'Fetched Successfully', cart, 200);
	} catch (error) {
		errorResponse(res, 'Failed to updated cart items', error as Error);
	}
};

const addBookSubscription = async (req: Request, res: Response) => {
	try {
		// const userId = req.params.userId;
		const subscriptionDetails = req.body;
		const subscription = await serviceContainer.addBookSubscriptionService(
			subscriptionDetails
		);
		successResponse(res, 'Fetched Successfully', subscription, 200);
	} catch (error) {
		errorResponse(res, 'Failed to create subscription', error as Error);
	}
};

const getBookSubscription = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const subscription = await serviceContainer.getBookSubscriptionService(
			userId
		);
		successResponse(res, 'Fetched Successfully', subscription, 200);
	} catch (error) {
		errorResponse(res, 'Failed to find subscription(s)', error as Error);
	}
};

export {
	signInUser,
	signUpUser,
	getABook,
	getAllBooks,
	getAGenreBooks,
	searchBook,
	filterProducts,
	getOrders,
	getUserDetail,
	updateUserDetail,
	getWishlist,
	updateWishlist,
	getCartItems,
	updateCart,
	addBookSubscription,
	getBookSubscription
};
