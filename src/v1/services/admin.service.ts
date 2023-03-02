import {repositoryContainer} from '@repositories/index.repository';

const adminSearchService = async (title: string) => {
	const books = await repositoryContainer.adminSearchBookRepo(title);
	if (books == null) {
		throw new Error('Books could not be found');
	}
	return books;
};

const adminAddBookService = async (book: any) => {
	const books = await repositoryContainer.adminAddBookRepo(book);
	if (books == null) {
		throw new Error('Book could not be added');
	}
	return books;
};

const adminDeleteBookService = async (id: string) => {
	const books = await repositoryContainer.adminDeleteBookRepo(id);
	if (books == null) {
		throw new Error('Book could not be deleted');
	}
	return books;
};

const adminGetBookService = async (bookId: string) => {
	const books = await repositoryContainer.adminGetBookRepo(bookId);
	if (books == null) {
		throw new Error('Book could not be retrieved');
	}
	return books;
};

const adminGetBooksService = async () => {
	const books = await repositoryContainer.adminGetBooksRepo();
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const adminGetDonationsService = async () => {
	const donations = await repositoryContainer.adminGetDonationsRepo();
	if (donations == null) {
		throw new Error('Donations could not be retrieved');
	}
	return donations;
};

const adminGetGenreBooksService = async (genreName: string) => {
	const books = await repositoryContainer.adminGetGenreBooksRepo(genreName);
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const adminGetOrdersService = async () => {
	const orders = await repositoryContainer.adminGetOrdersRepo();
	if (orders == null) {
		throw new Error('Orders could not be retrieved');
	}
	return orders;
};

const adminGetSubscriptionsService = async () => {
	const subscriptions = await repositoryContainer.adminGetSubscriptionsRepo();
	if (subscriptions == null) {
		throw new Error('Subscriptions could not be retrieved');
	}
	return subscriptions;
};

const adminGetUserBookSubscriptionsService = async (userId: string) => {
	const subscriptions =
		await repositoryContainer.adminGetUserBookSubscriptionsRepo(userId);
	if (subscriptions == null) {
		throw new Error('Subscriptions could not be retrieved');
	}
	return subscriptions;
};

const adminGetUserCartItemsService = async (userId: string) => {
	const cartItems = await repositoryContainer.adminGetUserCartItemsRepo(userId);
	if (cartItems == null) {
		throw new Error('cartItems could not be retrieved');
	}
	return cartItems;
};

const adminGetUserDonationsService = async (userId: string) => {
	const userDonation = await repositoryContainer.adminGetUserDonationsRepo(
		userId
	);
	if (userDonation == null) {
		throw new Error('User Donations could not be retrieved');
	}
	return userDonation;
};

const adminGetUserOrdersService = async (userId: string) => {
	const userOrders = await repositoryContainer.adminGetUserOrdersRepo(userId);
	if (userOrders == null) {
		throw new Error('User Orders could not be retrieved');
	}
	return userOrders;
};

const adminGetUserService = async (userId: string) => {
	const user = await repositoryContainer.adminGetUserRepo(userId);
	if (user == null) {
		throw new Error('User could not be retrieved');
	}
	return user;
};

const adminGetUsersService = async () => {
	const users = await repositoryContainer.adminGetUsersRepo();
	if (users == null) {
		throw new Error('Users could not be retrieved');
	}
	return users;
};

const adminSearchBookService = async (title: string) => {
	const user = await repositoryContainer.adminSearchBookRepo(title);
	if (user == null) {
		throw new Error('User could not be retrieved');
	}
	return user;
};

const adminUpdateBookService = async (book: any) => {
	const user = await repositoryContainer.adminUpdateBookRepo(book);
	if (user == null) {
		throw new Error('User could not be retrieved');
	}
	return user;
};

export {
	adminSearchService,
	adminAddBookService,
	adminDeleteBookService,
	adminGetBookService,
	adminGetBooksService,
	adminGetDonationsService,
	adminGetGenreBooksService,
	adminGetOrdersService,
	adminGetSubscriptionsService,
	adminGetUserBookSubscriptionsService,
	adminGetUserCartItemsService,
	adminGetUserDonationsService,
	adminGetUserOrdersService,
	adminGetUserService,
	adminSearchBookService,
	adminUpdateBookService,
	adminGetUsersService
};
