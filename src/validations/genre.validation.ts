import Joi from 'joi';
import {IGenre} from '@utils/types';

export const validateGenreData = (genre: IGenre) => {
	const genreSchema = Joi.object({
		genre_id: Joi.string().required(),
		genre_name: Joi.string().required()
	});
	return genreSchema.validate(genre);
};
