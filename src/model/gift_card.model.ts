import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GiftCardSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	gift_card_id: {
		type: String,
		required: true,
		unique: true
	},
	user_id: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	sender: {
		type: String,
		required: true
	},
	recipient: {
		type: String,
		required: true
	},
	phone_number: {
		type: Number,
		required: true
	},
	pin: {
		type: String,
		required: true,
		unique: true
	}
});

const GiftCard = mongoose.model('GiftCard', GiftCardSchema);
export {GiftCard};
