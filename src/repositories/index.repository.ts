import {
	getABookRepo,
	getAllBooksRepo,
	getAGenreBooksRepo,
	searchRepo,
	getOrdersRepo,
	getUserDetailsRepo,
	updateUserDetailsRepo,
	getWishlistRepo,
	updateWishlistRepo,
	getCartItemsRepo,
	updateCartRepo,
	addBookSubscriptionRepo,
	getBookSubscriptionsRepo
} from './user.repository';

const repositoryContainer = {
	getABookRepo,
	getAllBooksRepo,
	getAGenreBooksRepo,
	searchRepo,
	getOrdersRepo,
	getUserDetailsRepo,
	updateUserDetailsRepo,
	getWishlistRepo,
	updateWishlistRepo,
	getCartItemsRepo,
	updateCartRepo,
	addBookSubscriptionRepo,
	getBookSubscriptionsRepo
};

export {repositoryContainer};
