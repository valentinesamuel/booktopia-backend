import {repositoryContainer} from '../../repositories/index.repository';

const getAllBooksService = async () => {
	const books = await repositoryContainer.getAllBooksRepo();
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const getABookService = async (bookId: string) => {
	const book = await repositoryContainer.getABookRepo(bookId);
	if (book == null) {
		throw new Error('Book could not be retrieved');
	}
	return book;
};

const getAGenreBooksService = async (genre: string) => {
	const books = await repositoryContainer.getAGenreBooksRepo(genre);
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const searchService = async (title: string) => {
	const books = await repositoryContainer.searchRepo(title);
	console.log(books);
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const getOrdersService = async (userId: string) => {
	const orders = await repositoryContainer.getOrdersRepo(userId);
	if (orders == null) {
		throw new Error('Orders could not be retrieved');
	}
	return orders;
};

const getUserDetailService = async (userId: string) => {
	const orders = await repositoryContainer.getUserDetailsRepo(userId);
	if (orders == null) {
		throw new Error('Orders could not be retrieved');
	}
	return orders;
};

const updateUserDetailService = async (
	userId: string,
	updatedUserDetails: unknown
) => {
	const orders = await repositoryContainer.updateUserDetailsRepo(
		userId,
		updatedUserDetails
	);
	if (orders == null) {
		throw new Error('User could not be updated');
	}
	return orders;
};

const getWishlistService = async (userId: string) => {
	const wishlist = await repositoryContainer.getWishlistRepo(userId);
	if (wishlist == null) {
		throw new Error('Wishlist could not be found');
	}
	return wishlist;
};

const updateWishlistService = async (userId: string, newWishlist: any) => {
	const wishlist = await repositoryContainer.updateWishlistRepo(
		userId,
		newWishlist
	);
	if (wishlist == null) {
		throw new Error('Wishlist could not be updated');
	}
	return wishlist;
};

const getCartItemsService = async (userId: string) => {
	const cartItems = await repositoryContainer.getCartItemsRepo(userId);
	if (cartItems == null) {
		throw new Error('Cart items could not be updated');
	}
	return cartItems;
};

export {
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
