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
import {signInUser, signUpUser} from './auth.repository';

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
	getBookSubscriptionsRepo,
	signInUser,
	signUpUser
};

export {repositoryContainer};
