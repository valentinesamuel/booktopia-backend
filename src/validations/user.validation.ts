import Joi from 'joi';
import {IUser} from '../utils/types';

export const validateUserData = (user: IUser) => {
	const userSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		first_name: Joi.string().min(2).max(36).required(),
		last_name: Joi.string().min(2).max(36).required(),
		email: Joi.string().min(4).email().required(),
		password: Joi.string().min(8).max(32).required(),
		user_id: Joi.string().required(),
		wishlisted_books: Joi.array().items(Joi.string()),
		order_history: Joi.array().items(Joi.string()),
		cart: Joi.string(),
		shipping_address: Joi.object({
			user_id: Joi.string().required(),
			street: Joi.string().required(),
			state: Joi.string().required(),
			zip_code: Joi.string().required(),
			country: Joi.string().required(),
			phone_number: Joi.number().required()
		}),
		billing_address: Joi.object({
			user_id: Joi.string().required(),
			street: Joi.string().required(),
			state: Joi.string().required(),
			zip_code: Joi.string().required(),
			country: Joi.string().required(),
			phone_number: Joi.number().required()
		}),
		subscribed_to_newsletter: Joi.boolean().required()
	});
	return userSchema.validate(user);
};
