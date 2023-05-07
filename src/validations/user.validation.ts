import Joi from 'joi';
import {IUser} from 'src/utils/types';

export const validateSignUpUserData = (user: any) => {
	const userSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		first_name: Joi.string().min(2).max(36).required(),
		last_name: Joi.string().min(2).max(36).required(),
		email: Joi.string().min(4).email().required(),
		password: Joi.string().min(8).max(32).required(),
		confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
		user_id: Joi.string(),
		wishlist: Joi.array().items(Joi.string()),
		order_history: Joi.array().items(Joi.string()),
		cart: Joi.string(),
		shipping_address: Joi.object({
			user_id: Joi.string(),
			street: Joi.string(),
			state: Joi.string(),
			zip_code: Joi.string(),
			country: Joi.string(),
			phone_number: Joi.number()
		}),
		billing_address: Joi.object({
			user_id: Joi.string(),
			street: Joi.string(),
			state: Joi.string(),
			zip_code: Joi.string(),
			country: Joi.string(),
			phone_number: Joi.number()
		}),
		subscribed_to_newsletter: Joi.boolean()
	});
	return userSchema.validate(user);
};

export const validateSiginUserData = (user: IUser) => {
	const userSchema = Joi.object({
		email: Joi.string().min(4).email().required(),
		password: Joi.string().min(8).max(32).required()
	});
	return userSchema.validate(user);
};
