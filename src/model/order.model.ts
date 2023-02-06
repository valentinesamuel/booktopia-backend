import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	order_id: {
		type: String,
		required: true,
		unique: true
	},
	user_id: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	order_items: [
		{
			type: mongoose.Schema.Types.Mixed,
			required: false
		}
	],
	order_status: {
		type: String,
		required: true
	},
	shipping_information: {
		type: String,
		required: true
	},
	delivery_Address: {
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
	tracking_number: {
		type: String,
		required: true
	}
});

const Order = mongoose.model('Order', OrderSchema);

export {Order};
