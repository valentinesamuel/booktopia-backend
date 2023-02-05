import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DonationSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	donation_id: {
		type: String,
		required: true,
		unique: true
	},
	user_id: {
		type: String,
		required: true
	},
	physical_condition: {
		type: String,
		required: true
	},
	genre_id: {type: String, required: true},
	reason_for_donation: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: true
	},
	authors: {
		type: [String],
		required: true
	}
});

const Donation = mongoose.model('Donation', DonationSchema);
export {Donation};
