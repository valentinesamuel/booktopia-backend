import Joi from 'joi';
import {IOrderHistory} from '../utils/types';

export const validateOrderHistoryData = (orderHistory: IOrderHistory) => {
	const orderHistorySchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		user_id: Joi.string().required(),
		order_history_id: Joi.string().required(),
		orders: Joi.array().items(Joi.string()).required()
	});
	return orderHistorySchema.validate(orderHistory);
};
