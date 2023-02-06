import Joi from 'joi';
import {IReview} from '../utils/types';

export const validateReviewData = (review: IReview) => {
	const reviewSchema = Joi.object({
		created_at: Joi.date().default(Date.now),
		updated_at: Joi.date().default(Date.now),
		review_id: Joi.string().required(),
		user_id: Joi.string().required(),
		author: Joi.string().required(),
		image: Joi.string().required(),
		rating: Joi.number().required(),
		message: Joi.string().min(2).max(200).required()
	});
	return reviewSchema.validate(review);
};
