/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import {Book} from 'src/model/book.model';
import {Cart} from 'src/model/cart.model';
import {Genre} from 'src/model/genre.model';
import {GiftCard} from 'src/model/gift_card.model';
import {Subscription} from 'src/model/subscription.model';
import {User} from 'src/model/user.model';
import {ObjectIndexer} from 'src/utils/utility-types';

const getAllBooksRepo = async () => {
	const book = await Book.find({});
	return book;
};

const getABookRepo = async (bookId: string) => {
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

const getAGenreBooksRepo = async (genreName: string) => {
	const genre = await Genre.findOne({genre_name: genreName});
	const books = await Book.find({genre_id: {$in: [genre?.genre_id]}});
	return books;
};

const searchRepo = async (bookTitle: string) => {
	const book = await Book.find({title: {$regex: bookTitle, $options: 'i'}});
	return book;
};

const getOrdersRepo = async (userId: string) => {
	const order = `You Got the ${userId} orders`;
	// const orders = await Order.find({user_id: userId});
	return order;
};

const getUserDetailsRepo = async (userId: string) => {
	const user = await User.findOne({userId}, {__v: 0});
	return user;
};

const updateUserDetailsRepo = async (
	userId: string,
	updatedUserDetails: any
) => {
	const user = await User.updateOne(
		{user_id: userId},
		{$set: updatedUserDetails},
		{upsert: true}
	);
	return user;
};

const getWishlistRepo = async (userId: string) => {
	const user = await User.findOne({user_id: userId});
	const wishlistedBooks = await Book.find({
		book_id: {$in: user?.wishlist}
	});

	return wishlistedBooks;
};

const updateWishlistRepo = async (userId: string, wishlistItems: string[]) => {
	const wishlist = await User.updateOne(
		{user_id: userId},
		{wishlist: wishlistItems},
		{
			upsert: true
		}
	);
	return wishlist;
};

const getCartItemsRepo = async (userId: string) => {
	const cartDetails: ObjectIndexer = {};
	const cartId = await User.findOne({user_id: userId});
	const cartObj = await Cart.findOne({
		cart_id: cartId?.cart
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

const updateCartRepo = async (userId: string, updatedCartItems: any) => {
	const updatedCart = await Cart.updateOne(
		{user_id: userId},
		{$addToSet: {cart_items: {$each: updatedCartItems}}}
	);
	return updatedCart;
};

const addBookSubscriptionRepo = async (subscriptionDetails: any) => {
	const subscription = await Subscription.create(subscriptionDetails);
	return subscription;
};

const getBookSubscriptionsRepo = async (userId: string) => {
	const subscription = await Subscription.find({user_id: userId});
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
