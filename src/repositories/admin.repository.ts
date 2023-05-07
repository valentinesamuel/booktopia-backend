import {Book} from '../model/book.model';
import {Cart} from '../model/cart.model';
import {Donation} from '../model/donation.model';
import {Genre} from '../model/genre.model';
import {GiftCard} from '../model/gift_card.model';
import {Order} from '../model/order.model';
import {OrderHistory} from '../model/order_history.model';
import {Subscription} from '../model/subscription.model';
import {User} from '../model/user.model';
import {ObjectIndexer} from '../utils/utility-types';

const adminSearchBookRepo = async (bookTitle: string) => {
	const book = await Book.find({title: bookTitle});
	return book;
};

const adminGetBooksRepo = async () => {
	const book = await Book.find({});
	return book;
};

const adminGetBookRepo = async (bookId: string) => {
	const book = await Book.aggregate([
		{$match: {book_id: bookId}},
		{
			$lookup: {
				from: 'authors',
				localField: 'authors_id',
				foreignField: 'author_id',
				as: 'authors'
			}
		},

		{
			$lookup: {
				from: 'genres',
				localField: 'genre_id',
				foreignField: 'genre_id',
				as: 'genres'
			}
		},

		{
			$project: {
				'authors._id': 0,
				'genres._id': 0,
				genre_id: 0,
				authors_id: 0,
				__v: 0
			}
		}
	]);
	return book;
};

const adminUpdateBookRepo = async (newBook: any) => {
	const book = await Book.findOneAndUpdate(
		{book_id: newBook.book_id},
		{...newBook, updated_at: new Date()}
	);
	return book;
};

const adminDeleteBookRepo = async (bookId: string) => {
	const book = await Book.deleteOne({book_id: bookId});
	return book;
};

const adminAddBookRepo = async (newBook: string) => {
	const book = await Book.create(newBook);
	return book;
};

const adminGetGenreBooksRepo = async (genreName: string) => {
	const genre = await Genre.findOne({genre_name: genreName});
	const books = await Book.find({genre_id: {$in: [genre?.genre_id]}});
	return books;
};

const adminGetSubscriptionsRepo = async () => {
	const subscriptions = await Subscription.find({});
	return subscriptions;
};

const adminGetOrdersRepo = async () => {
	const orders = await Order.find({});
	return orders;
};

const adminGetDonationsRepo = async () => {
	const donations = await Donation.find({});
	return donations;
};

const adminGetUsersRepo = async () => {
	const users = await User.find({});
	return users;
};

const adminGetUserRepo = async (userId: string) => {
	const user = await User.find({user_id: userId});
	return user;
};

const adminGetUserCartItemsRepo = async (userId: string) => {
	const cartDetails: ObjectIndexer = {};
	const cartId = await User.findOne({user_id: userId}, {projection: {cart: 1}});
	const cartObj = await Cart.findOne({
		cart_id: cartId
	});
	const books = await Book.find({
		book_id: {$in: cartObj?.cart_items}
	});
	const giftcards = await GiftCard.find({
		gift_card_id: {$in: cartObj?.cart_items}
	});
	cartDetails.books = books;
	cartDetails.gift_card = giftcards;
	return cartDetails;
};

const adminGetUserBookSubscriptionsRepo = async (email: string) => {
	const subscription = await Subscription.find({email});
	return subscription;
};

const adminGetUserDonationsRepo = async (userId: string) => {
	const donations = await Donation.find({user_id: userId});
	return donations;
};

const adminGetUserOrdersRepo = async (userId: string) => {
	const orderItems: ObjectIndexer = {};
	const orderHistory = await User.findOne(
		{user_id: userId},
		{order_history: 1}
	);
	const orders = await OrderHistory.findOne(
		{
			order_history_id: orderHistory
		},
		{orders: 1}
	);
	const books = await Book.find({
		book_id: {$in: orders?.orders}
	});
	const giftCards = await GiftCard.find({
		gift_card_id: {$in: orders?.orders}
	});
	orderItems.books = books;
	orderItems.giftCards = giftCards;
	return orderItems;
};

export {
	adminSearchBookRepo,
	adminGetBooksRepo,
	adminAddBookRepo,
	adminDeleteBookRepo,
	adminGetBookRepo,
	adminGetDonationsRepo,
	adminGetGenreBooksRepo,
	adminGetOrdersRepo,
	adminGetSubscriptionsRepo,
	adminGetUserBookSubscriptionsRepo,
	adminGetUserCartItemsRepo,
	adminGetUserDonationsRepo,
	adminGetUserOrdersRepo,
	adminUpdateBookRepo,
	adminGetUserRepo,
	adminGetUsersRepo
};
