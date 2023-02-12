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
	getCartItemsService
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
	getCartItemsService
};

export {serviceContainer};
