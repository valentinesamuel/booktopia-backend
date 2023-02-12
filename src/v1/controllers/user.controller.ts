/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {Request, Response} from 'express';
import {dbQueryParser} from '../../utils/db_query_paarser';
import {convertQueryStringToObject} from '../../utils/query_parser';
import {errorResponse, successResponse} from '../../utils/response_parser';
import {serviceContainer} from '../services/index.service';

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
	getCartItems
};
