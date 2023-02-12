import {
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
} from './user.service';

const serviceContainer = {
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
