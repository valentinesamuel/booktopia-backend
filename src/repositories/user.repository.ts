// import { Genre } from '../../model/genre.model';
// import {Book} from '../../model/book.model';

const getAllBooksRepo = async () => {
	const book = 'You Got all the books';
	// const book = await Book.find({});
	return book;
};

const getABookRepo = async (_bookId: string) => {
	const book = 'You Got a Book';
	// const book = await Book.find({book_id: bookId});
	return book;
};

// const getGenreIdByName = async (genre: string) => {
// 	const genreDoc = await Genre.findOne({genre});
// 	return genreDoc?.genre_id;
// };

const getAGenreBooksRepo = async (genreName: string) => {
	const book = `You Got all the ${genreName} books`;
	// const genreId = await getGenreIdByName(genreName)
	// const book = await Book.find({genre_id: genreId});
	return book;
};

const searchRepo = async (bookTitle: string) => {
	const book = `You Got the ${bookTitle} books`;
	// const book = await Book.find({title: bookTitle});
	return book;
};

export {getABookRepo, getAllBooksRepo, getAGenreBooksRepo, searchRepo};
