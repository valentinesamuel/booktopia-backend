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
import {
	adminAddBookRepo,
	adminDeleteBookRepo,
	adminGetBookRepo,
	adminGetBooksRepo,
	adminGetDonationsRepo,
	adminGetGenreBooksRepo,
	adminGetOrdersRepo,
	adminGetSubscriptionsRepo,
	adminGetUserBookSubscriptionsRepo,
	adminGetUserCartItemsRepo,
	adminGetUserDonationsRepo,
	adminGetUserOrdersRepo,
	adminGetUserRepo,
	adminSearchBookRepo,
	adminGetUsersRepo,
	adminUpdateBookRepo
} from './admin.repository';

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
	signUpUser,

	adminAddBookRepo,
	adminDeleteBookRepo,
	adminGetBookRepo,
	adminGetBooksRepo,
	adminGetDonationsRepo,
	adminGetGenreBooksRepo,
	adminGetOrdersRepo,
	adminGetSubscriptionsRepo,
	adminGetUserBookSubscriptionsRepo,
	adminGetUserCartItemsRepo,
	adminGetUserDonationsRepo,
	adminGetUserOrdersRepo,
	adminGetUserRepo,
	adminSearchBookRepo,
	adminGetUsersRepo,
	adminUpdateBookRepo
};

export {repositoryContainer};
