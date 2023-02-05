import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	review_id: {
		type: String,
		required: true,
		unique: true
	},
	user_id: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	body: {
		type: String,
		required: true
	}
});

const Review = mongoose.model('Review', ReviewSchema);
export {Review};
