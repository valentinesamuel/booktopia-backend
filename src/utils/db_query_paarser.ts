import {Genre} from '..//model/genre.model';

// eslint-disable-next-line @typescript-eslint/member-delimiter-style
const dbQueryParser = (query: any) => {
	const {genre, price, rating} = query;

	const queryObject: any = {};

	if (genre !== undefined) {
		queryObject.genre = {$in: genre};
	}
	if (price !== undefined) {
		const minPrice = price[0];
		const maxPrice = price[1];
		queryObject.price = {
			$gte: minPrice,
			$lte: maxPrice
		};
	}
	if (rating !== undefined) {
		queryObject.rating = {
			$gte: rating
		};
	}

	return queryObject;
};

const getGenreIdByName = async (genre: string) => {
	const genreDoc = await Genre.findOne({genre});
	return genreDoc?.genre_id;
};
export {dbQueryParser, getGenreIdByName};
