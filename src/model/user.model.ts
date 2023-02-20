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
		salt: {
			type: String,
			required: true,
			unique: true
		},
		hash: {
			type: String,
			required: true,
			unique: true
		}
	},
	user_id: {
		type: String,
		required: true,
		unique: true
	},
	wishlist: {
		type: [String],
		required: false
	},
	order_history: {
		type: [String],
		required: false
	},
	cart: {
		type: String,
		required: false
	},
	shipping_address: {
		street: {
			type: String,
			required: false
		},
		state: {
			type: String,
			required: false
		},
		zip_code: {
			type: String,
			required: false
		},
		country: {
			type: String,
			required: false
		},
		phone_number: {
			type: Number,
			required: false
		}
	},
	billing_address: {
		street: {
			type: String,
			required: false
		},
		state: {
			type: String,
			required: false
		},
		zip_code: {
			type: String,
			required: false
		},
		country: {
			type: String,
			required: false
		},
		phone_number: {
			type: Number,
			required: false
		}
	},
	subscribed_to_newsletter: {
		type: Boolean,
		required: true
	}
});

const User = mongoose.model('User', UserSchema);
export {User};
