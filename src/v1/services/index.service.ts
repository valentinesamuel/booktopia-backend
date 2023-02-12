import {
	getABookService,
	signInUserService,
	signUpUserService,
	getAllBooksService,
	getAGenreBooksService,
	searchService,
	getOrdersService,
	getUserDetailService,
	updateUserDetailService,
	getWishlistService,
	updateWishlistService,
	getCartItemsService,
	updateCartService,
	addBookSubscriptionService,
	getBookSubscriptionService
} from './user.service';

const serviceContainer = {
	signInUserService,
	signUpUserService,
	getABookService,
	getAllBooksService,
	getAGenreBooksService,
	searchService,
	getOrdersService,
	getUserDetailService,
	updateUserDetailService,
	getWishlistService,
	updateWishlistService,
	getCartItemsService,
	updateCartService,
	addBookSubscriptionService,
	getBookSubscriptionService
};

export {serviceContainer};
