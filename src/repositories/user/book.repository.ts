import {Book} from '../../model/book.model';

const getABookRepo = async (bookId: string) => {
	const book = await Book.find({book_id: bookId});
	return book;
};

export {getABookRepo};
