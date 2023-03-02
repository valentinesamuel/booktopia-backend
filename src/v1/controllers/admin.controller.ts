import {Request, Response} from 'express';
import {uploadToCloudinary} from '@utils/image_uploader';
import {errorResponse, successResponse} from '@utils/response_parser';
import {serviceContainer} from '@services/index.service';

const adminSearchBook = async (req: Request, res: Response) => {
	try {
		const book = req.query.searchstring;
		const books = await serviceContainer.adminSearchService(book as string);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch books', error as Error);
	}
};

const adminAddBookSubscription = async (req: Request, res: Response) => {
	try {
		const subscriptionDetails = req.body.subscriptionDetails;
		const books = await serviceContainer.addBookSubscriptionService(
			subscriptionDetails
		);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch subscription', error as Error);
	}
};

const adminAddBook = async (req: Request, res: Response) => {
	try {
		const file = req.files?.book_cover;
		console.log(file);
		const newBook = JSON.parse(req.body.data);
		const frontCover = await uploadToCloudinary(file, newBook);
		newBook.cover_image = frontCover;

		const books = await serviceContainer.adminAddBookService(newBook);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to add book', error as Error);
	}
};

const adminDeleteBook = async (req: Request, res: Response) => {
	try {
		const deadBook = req.params.bookid;
		const books = await serviceContainer.adminDeleteBookService(deadBook);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to delete book', error as Error);
	}
};

const adminGetBook = async (req: Request, res: Response) => {
	try {
		const bookid = req.params.bookid;
		const books = await serviceContainer.adminGetBookService(bookid);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get book', error as Error);
	}
};

const adminGetBooks = async (_req: Request, res: Response) => {
	try {
		const books = await serviceContainer.adminGetBooksService();
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get books', error as Error);
	}
};

const adminGetDonations = async (_req: Request, res: Response) => {
	try {
		const donations = await serviceContainer.adminGetDonationsService();
		successResponse(res, 'Fetched successfully', donations, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get donations', error as Error);
	}
};

const adminGetGenreBooks = async (req: Request, res: Response) => {
	try {
		const genre = req.params.genreName;
		const books = await serviceContainer.adminGetGenreBooksService(genre);
		successResponse(res, 'Fetched successfully', books, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get genre books', error as Error);
	}
};

const adminGetOrders = async (_req: Request, res: Response) => {
	try {
		const orders = await serviceContainer.adminGetOrdersService();
		successResponse(res, 'Fetched successfully', orders, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get orders', error as Error);
	}
};

const adminGetSubscriptions = async (_req: Request, res: Response) => {
	try {
		const subscriptions = await serviceContainer.adminGetSubscriptionsService();
		successResponse(res, 'Fetched successfully', subscriptions, 200);
	} catch (error) {
		errorResponse(res, 'Failed to subscriptions', error as Error);
	}
};

const adminGetUserBookSubscriptions = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data;
		const subscriptions =
			await serviceContainer.adminGetUserBookSubscriptionsService(userId);
		successResponse(res, 'Fetched successfully', subscriptions, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get user book subscriptions', error as Error);
	}
};

const adminGetUserCartItems = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data;
		const subscriptions = await serviceContainer.adminGetUserCartItemsService(
			userId
		);
		successResponse(res, 'Fetched successfully', subscriptions, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get cart items', error as Error);
	}
};

const adminGetUserDonations = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data;
		const subscriptions = await serviceContainer.adminGetUserDonationsService(
			userId
		);
		successResponse(res, 'Fetched successfully', subscriptions, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get user donations', error as Error);
	}
};

const adminGetUserOrder = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data;
		const subscriptions = await serviceContainer.adminGetUserOrdersService(
			userId
		);
		successResponse(res, 'Fetched successfully', subscriptions, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get user donations', error as Error);
	}
};

const adminUpdateBook = async (req: Request, res: Response) => {
	try {
		const bookDetails = req.cookies.bookDetails;
		const book = await serviceContainer.adminUpdateBookService(bookDetails);
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to update book', error as Error);
	}
};

const adminGetUser = async (req: Request, res: Response) => {
	try {
		const userId = req.cookies.user_data;
		const book = await serviceContainer.adminGetUserService(userId.user_id);
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get user', error as Error);
	}
};

const adminGetUsers = async (_req: Request, res: Response) => {
	try {
		const users = await serviceContainer.adminGetUsersService();
		successResponse(res, 'Fetched successfully', users, 200);
	} catch (error) {
		errorResponse(res, 'Failed to get user', error as Error);
	}
};

export {
	adminSearchBook,
	adminAddBookSubscription,
	adminAddBook,
	adminDeleteBook,
	adminGetBook,
	adminGetBooks,
	adminGetDonations,
	adminGetGenreBooks,
	adminGetOrders,
	adminGetSubscriptions,
	adminGetUserBookSubscriptions,
	adminGetUserCartItems,
	adminGetUserDonations,
	adminGetUserOrder,
	adminUpdateBook,
	adminGetUser,
	adminGetUsers
};
