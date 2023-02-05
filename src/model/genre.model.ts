import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	genre_id: {
		type: String,
		required: true,
		unique: true
	},
	genre_name: {
		type: String,
		required: true,
		unique: true
	}
});

const Genre = mongoose.model('Genre', GenreSchema);
export {Genre};
