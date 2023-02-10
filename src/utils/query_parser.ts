// genre=action+comedy%&%fiction&20rating=4&20price=20000+40000

import {ObjectIndexer} from './utility-types';

const convertQueryStringToObject = (queryString: string) => {
	const queryObject: ObjectIndexer = {};
	queryString.split('&20').forEach((query) => {
		const key = query.split('=')[0];
		const value = query.split('=')[1];
		if (key === 'rating') {
			queryObject[key] = value;
		} else {
			queryObject[key] = value.replace(/%/g, ' ').split('+');
		}
	});
	return queryObject;
};

export {convertQueryStringToObject};
