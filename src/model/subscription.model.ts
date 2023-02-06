import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	subscription_id: {type: String, required: true, unique: true},
	user_id: {type: String, required: true},
	subscription_package: {type: String, required: true},
	duration: {type: String, required: true},
	fiction_genres: {type: [String], required: true},
	non_fiction_genres: {type: [String], required: true},
	children_books: {type: [String], required: true},
	message: {type: String, required: true},
	books_delivered: {type: Number, required: true},
	total_books: {type: Number, required: true},
	books_remaining: {type: Number, required: true}
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
export {Subscription};
