import {repositoryContainer} from '../../../repositories/index.repository';

const getABookService = async (bookId: string) => {
	const books = await repositoryContainer.getABookRepo(bookId);
	if (books == null) {
		throw new Error('Book could not be retrieved');
	}
	return books;
};

export {getABookService};
