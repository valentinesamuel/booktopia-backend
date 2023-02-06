import Joi from 'joi';
import {ISubscription} from '../utils/types';

export const validateSubscriptionData = (subscription: ISubscription) => {
	const subscriptionSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		subscription_id: Joi.string().required(),
		user_id: Joi.string().required(),
		subscription_package: Joi.string().required(),
		duration: Joi.string().required(),
		fiction_genres: Joi.array().items(Joi.string()).required(),
		non_fiction_genres: Joi.array().items(Joi.string()).required(),
		children_books: Joi.array().items(Joi.string()).required(),
		message: Joi.string().min(2).max(100).required(),
		books_delivered: Joi.number().required(),
		total_books: Joi.number().required(),
		books_remaining: Joi.number().default(Joi.ref('total_books'))
	});
	return subscriptionSchema.validate(subscription);
};
