import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderHistorySchema = new Schema({
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
		required: true
	},
	order_history_id: {
		type: String,
		required: true
	},
	orders: {
		type: [String],
		required: true
	}
});

const OrderHistory = mongoose.model('OrderHistory', OrderHistorySchema);

export {OrderHistory};
