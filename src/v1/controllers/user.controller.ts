/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import {Request, Response} from 'express';
import { serviceContainer } from '../services/index.service';
import { errorResponse, successResponse } from '../../utils/response_parser';
import { convertQueryStringToObject } from '../../utils/query_parser';
import { dbQueryParser } from '../../utils/db_query_paarser';
import { verifyUserID } from '../../utils/encryption2';

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
		return;
	} catch (error) {
		errorResponse(res, 'Failed to fetch books', error as Error);
	}
};

const searchBook = async (req: Request, res: Response) => {
	try {
		const bookTitle = req.query.searchstring;
		console.log(bookTitle);

		const book = await serviceContainer.searchService(bookTitle as string);
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch book', error as Error);
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
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		if (userExists === true) {
			const userDetail = await serviceContainer.getUserDetailService(userId);
			successResponse(res, 'Fetched Successfully', userDetail, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to fetch user details', error as Error);
	}
};

const updateUserDetail = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		const updatedInformation = req.body;
		if (userExists === true) {
			const userDetail = await serviceContainer.updateUserDetailService(
				userId,
				updatedInformation
			);
			successResponse(res, 'Updated Sucessfully', userDetail, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to update user details', error as Error);
	}
};

const getWishlist = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		if (userExists === true) {
			const wishlist = await serviceContainer.getWishlistService(userId);
			successResponse(res, 'Fetched wishlist Successfully', wishlist, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to fetch user wishlist', error as Error);
	}
};

const updateWishlist = async (req: Request, res: Response) => {
	try {
		const wishlistItems = req.body;
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		if (userExists === true) {
			const wishlist = await serviceContainer.updateWishlistService(
				userId,
				wishlistItems
			);
			successResponse(res, 'Update Successfully', wishlist, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to update user wishlist', error as Error);
	}
};

const getCartItems = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		if (userExists === true) {
			const cartItems = await serviceContainer.getCartItemsService(userId);
			successResponse(res, 'Fetched cart items successfully', cartItems, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to fetch cart items', error as Error);
	}
};

const updateCart = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		const cartItems = req.body;
		if (userExists === true) {
			const cart = await serviceContainer.updateCartService(userId, cartItems);
			successResponse(res, 'Successfully updated user cart', cart, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to updated cart items', error as Error);
	}
};

const addBookSubscription = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		const subscriptionDetails = req.body;
		if (userExists === true) {
			const subscription = await serviceContainer.addBookSubscriptionService(
				subscriptionDetails
			);
			successResponse(res, 'Fetched Successfully', subscription, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to create subscription', error as Error);
	}
};

const getBookSubscription = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data.data.user_id;
		const userExists = await verifyUserID(userId);
		if (userExists === true) {
			const subscription = await serviceContainer.getBookSubscriptionService(
				userId
			);
			successResponse(res, 'Fetched Successfully', subscription, 200);
			return;
		}
		throw new Error('Invalid User');
	} catch (error) {
		errorResponse(res, 'Failed to find subscription(s)', error as Error);
	}
};

export {
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
