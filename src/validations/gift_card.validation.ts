import Joi from 'joi';
import { IGiftCard } from 'src/utils/types';

export const validateGiftCardData = (giftCard: IGiftCard) => {
	const giftCardSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		gift_card_id: Joi.string().required(),
		user_id: Joi.string().required(),
		amount: Joi.number().required(),
		price: Joi.number().required(),
		sender: Joi.string().required(),
		recipient: Joi.string().required(),
		phone_number: Joi.number().required(),
		pin: Joi.string().required()
	});
	return giftCardSchema.validate(giftCard);
};
