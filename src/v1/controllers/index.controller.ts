import {
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
} from './user.controller';

const controllerContainer = {
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

export {controllerContainer};
