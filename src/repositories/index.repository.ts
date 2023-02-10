import {
	getABookRepo,
	getAllBooksRepo,
	getAGenreBooksRepo,
	searchRepo
} from './user.repository';

const repositoryContainer = {
	getABookRepo,
	getAllBooksRepo,
	getAGenreBooksRepo,
	searchRepo
};

export {repositoryContainer};
