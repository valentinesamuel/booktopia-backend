import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	quantity_available: {
		type: Number,
		required: true
	},
	book_id: {type: String, required: true, unique: true},
	authors_id: {type: [String], required: true},
	title: {type: String, required: true},
	price: {type: Number, required: true},
	discounted_price: {type: Number, required: false},
	average_rating: {type: Number, required: true},
	author_biography: {type: String, required: true},
	book_summary: {type: String, required: true},
	book_details: {
		cover_type: {type: String, required: true},
		ISBN: {type: String, required: true},
		publisher: {type: String, required: true}
	},
	cover_image: {type: String, required: true},
	genre_id: {type: [String], required: true}
});

const Book = mongoose.model('Book', BookSchema);
export {Book};
