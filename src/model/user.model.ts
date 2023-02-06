/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	user_id: {
		type: String,
		required: true,
		unique: true
	},
	wishlisted_books: {
		type: [String],
		required: false,
		unique: true
	},
	order_history: {
		type: [String],
		required: false,
		unique: true
	},
	cart: {
		type: String,
		required: false,
		unique: true
	},
	shipping_address: {
		user_id: {
			type: String,
			required: true
		},
		street: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true
		},
		zip_code: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		phone_number: {
			type: Number,
			required: true
		}
	},
	billing_address: {
		user_id: {
			type: String,
			required: true
		},
		street: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true
		},
		zip_code: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		phone_number: {
			type: Number,
			required: true
		}
	},
	subscribed_to_newsletter: {
		type: Boolean,
		required: true
	}
});

const User = mongoose.model('User', UserSchema);
export {User};
