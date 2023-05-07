import Joi from 'joi';
import { IBook } from 'src/utils/types';

export const validateBookData = (book: IBook) => {
	const bookSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		quantity_available: Joi.number().required(),
		book_id: Joi.string().required(),
		authors_id: Joi.array().items(Joi.string()).required(),
		title: Joi.string().required(),
		price: Joi.number().required(),
		discounted_price: Joi.number(),
		average_rating: Joi.number().required(),
		author_biography: Joi.string().min(5).max(100).required(),
		book_summary: Joi.string().min(5).max(200).required(),
		book_details: Joi.object({
			cover_type: Joi.string().required(),
			ISBN: Joi.string().required(),
			publisher: Joi.string().required()
		}),
		cover_image: Joi.string().required(),
		genre_id: Joi.array().items(Joi.string()).required()
	});
	return bookSchema.validate(book);
};
