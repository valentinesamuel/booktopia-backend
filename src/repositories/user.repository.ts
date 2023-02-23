/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// import { Genre } from '../model/genre.model';
// import {GiftCard} from '../model/gift_card.model';
// import {ObjectIndexer} from '../utils/utility-types';
// import {Book} from '../model/book.model';
// import { Order } from '../model/order.model';
// import {Cart} from '../model/cart.model';
import {User} from '../model/user.model';
// import {Subscription} from '../model/subscription.model';

const getAllBooksRepo = async () => {
	const book = 'You Got all the books';
	// const book = await Book.find({});
	return book;
};

const getABookRepo = async (_bookId: string) => {
	const book = 'You Got a Book';
	// const book = await Book.find({book_id: bookId});
	return book;
};

// const getGenreIdByName = async (genre: string) => {
// 	const genreDoc = await Genre.findOne({genre});
// 	return genreDoc?.genre_id;
// };

const getAGenreBooksRepo = async (genreName: string) => {
	const book = `You Got all the ${genreName} books`;
	// const genreId = await getGenreIdByName(genreName)
	// const book = await Book.find({genre_id: genreId});
	return book;
};

const searchRepo = async (bookTitle: string) => {
	const book = `You Got the ${bookTitle} books`;
	// const book = await Book.find({title: bookTitle});
	return book;
};

const getOrdersRepo = async (userId: string) => {
	const order = `You Got the ${userId} orders`;
	// const orders = await Order.find({user_id: userId});
	return order;
};

const getUserDetailsRepo = async (email: string) => {
	const user = await User.findOne({email});
	return user;
};

const updateUserDetailsRepo = async (
	userId: string,
	_updatedUserDetails: any
) => {
	const user = `You updated the ${userId}`;
	// const user = await User.find({user_id: userId}, {$set: updatedUserDetails});
	return user;
};

const getWishlistRepo = async (userId: string) => {
	const wishlistedBooks = `You Got the ${userId} wishlist`;
	// const wishlist = await User.findOne(
	// 	{user_id: userId},
	// 	{projection: {wishlist: 1}}
	// );
	// const wishlistedBooks = await Book.find({
	// 	book_id: {$in: wishlist}
	// });
	return wishlistedBooks;
};

const updateWishlistRepo = async (userId: string, _wishlistItems: any) => {
	const wishlist = `You Got the ${userId} wishlist`;
	// const wishlist = await User.updateOne(
	// 	{user_id: userId},
	// 	{wishlist: wishlistItems},
	// 	{
	// 		upsert: true
	// 	}
	// );
	return wishlist;
};

const getCartItemsRepo = async (userId: string) => {
	const cartDetails = `You Got the ${userId} cart items`;
	// const cartDetails: ObjectIndexer = {};
	// const cartId = await User.findOne({user_id: userId}, {projection: {cart: 1}});
	// const cartObj = await Cart.findOne({
	// 	cart_id: cartId
	// });
	// const books = await Book.find({
	// 	book_id: {$in: cartObj?.cart_items}
	// });
	// const giftcards = await GiftCard.find({
	// 	gift_card_id: {$in: cartObj?.cart_items}
	// });
	// cartDetails.books = books;
	// cartDetails.gift_card = giftcards;
	return cartDetails;
};

const updateCartRepo = async (userId: string, _updatedCartItems: any) => {
	const updatedCart = `You updated the ${userId} cart items`;
	// const updatedCart = await Cart.findOne(
	// 	{user_id: userId},
	// 	{cart_items: updatedCartItems},
	// 	{upsert: true}
	// );
	return updatedCart;
};

const addBookSubscriptionRepo = async (_subscriptionDetails: any) => {
	const subscription = 'You subscribed';
	// const subscription = await Subscription.create(subscriptionDetails);
	return subscription;
};

const getBookSubscriptionsRepo = async (_userId: string) => {
	const subscription = 'See subscriptions';
	// const subscription = await Subscription.find({user_id: userId});
	return subscription;
};

export {
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
