import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	session_id: {type: String, required: true, unique: true},
	data: {
		user_id: {type: String, required: true, unique: true},
		email: {type: String, required: true, unique: true},
		first_name: {type: String, required: true},
		last_name: {type: String, required: true},
		subscribed_to_newsletter: {type: Boolean, required: true}
	}
});

const Session = mongoose.model('Session', SessionSchema);
export {Session};
