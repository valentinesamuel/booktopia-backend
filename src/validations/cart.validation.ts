import Joi from 'joi';
import { ICart } from 'src/utils/types';

export const validateCartData = (cart: ICart) => {
	const cartSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		user_id: Joi.string().required(),
		cart_id: Joi.string().required(),
		cart_items: Joi.array().items(Joi.alternatives()),
		sub_total: Joi.number().required(),
		shipping_estimate: Joi.number().required(),
		tax_estimate: Joi.number().required(),
		cart_total: Joi.number().required()
	});
	return cartSchema.validate(cart);
};
