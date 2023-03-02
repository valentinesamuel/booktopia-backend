import Joi from 'joi';
import {IOrder} from '@utils/types';

export const validateOrderData = (order: IOrder) => {
	const orderSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		order_id: Joi.string().required(),
		user_id: Joi.string().required(),
		price: Joi.number().required(),
		order_items: Joi.array().items(Joi.alternatives()),
		order_status: Joi.string().required(),
		shipping_information: Joi.string().required(),
		delivery_address: Joi.object({
			user_id: Joi.string().required(),
			street: Joi.string().required(),
			state: Joi.string().required(),
			zip_code: Joi.string().required(),
			country: Joi.string().required(),
			phone_number: Joi.number().required()
		}),
		tracking_number: Joi.string().required()
	});
	return orderSchema.validate(order);
};
