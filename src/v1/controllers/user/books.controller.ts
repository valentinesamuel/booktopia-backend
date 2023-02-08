import {Request, Response} from 'express';
import {errorResponse, successResponse} from '../../../utils/response_parser';
import {serviceContainer} from '../../services/index.service';

const getABook = async (req: Request, res: Response) => {
	try {
		const bookId = req.params.bookId;
		const book = await serviceContainer.getABookService(bookId);
		successResponse(res, 'Fetched successfully', book, 200);
	} catch (error) {
		errorResponse(res, 'Failed to fetch a book', error as Error);
	}
};

export {getABook};
