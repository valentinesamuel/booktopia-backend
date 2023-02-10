import {
	getABookService,
	getAllBooksService,
	getAGenreBooksService,
	searchService
} from './user.service';

const serviceContainer = {
	getABookService,
	getAllBooksService,
	getAGenreBooksService,
	searchService
};

export {serviceContainer};
