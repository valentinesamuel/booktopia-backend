import {repositoryContainer} from '../../repositories/index.repository';

const getAllBooksService = async () => {
	const books = await repositoryContainer.getAllBooksRepo();
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const getABookService = async (bookId: string) => {
	const book = await repositoryContainer.getABookRepo(bookId);
	if (book == null) {
		throw new Error('Book could not be retrieved');
	}
	return book;
};

const getAGenreBooksService = async (genre: string) => {
	const books = await repositoryContainer.getAGenreBooksRepo(genre);
	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

const searchService = async (title: string) => {
	const books = await repositoryContainer.searchRepo(title);
	console.log(books);

	if (books == null) {
		throw new Error('Books could not be retrieved');
	}
	return books;
};

export {
	getABookService,
	getAllBooksService,
	getAGenreBooksService,
	searchService
};
