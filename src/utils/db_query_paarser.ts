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
export {dbQueryParser};
