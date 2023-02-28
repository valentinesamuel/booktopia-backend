import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	author_name: {
		type: String,
		required: true,
		unique: true
	},
	author_id: {
		type: String,
		required: true,
		unique: true
	},
	author_biography: {
		type: String,
		required: true
	}
});

const Author = mongoose.model('Author', AuthorSchema);
export {Author};
