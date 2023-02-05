import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	user_id: {
		type: String,
		required: true,
		unique: true
	},
	cart_id: {
		type: String,
		required: true,
		unique: true
	},
	cart_items: [
		{
			type: mongoose.Schema.Types.Mixed,
			required: false
		}
	],
	sub_total: {
		type: Number,
		required: true
	},
	shipping_estimate: {
		type: Number,
		required: true
	},
	tax_estimate: {
		type: Number,
		required: true
	},
	cart_total: {
		type: Number,
		required: true
	}
});

const Cart = mongoose.model('Cart', CartSchema);
export {Cart};
