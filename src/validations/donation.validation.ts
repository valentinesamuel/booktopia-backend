import Joi from 'joi';
import {IDonation} from '@utils/types';

export const validateDonationData = (donation: IDonation) => {
	const donationSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		donation_id: Joi.string().required(),
		user_id: Joi.string().required(),
		physical_condition: Joi.string().required(),
		genre_id: Joi.number().required(),
		reason_for_donation: Joi.string().required(),
		message: Joi.string().required(),
		title: Joi.string().required(),
		authors: Joi.array().items(Joi.string()).required()
	});
	return donationSchema.validate(donation);
};
