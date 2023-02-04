import {Response} from 'express';

/**
 * @description A function that facilitates the response of a successful request
 * @param {Response} res http response object
 * @param {String} message custom success message
 * @param {Object} data response data
 * @param {Number} [status=200] http success status code, defaults to 200
 * @returns {Response} http response with success status and message
 */
const successResponse = (
	res: Response,
	message: unknown,
	data: unknown,
	status = 200
) => {
	const resBody = {
		state: 'success',
		code: status,
		message,
		data
	};

	return res.status(status).json(resBody);
};

/**
 * @description Returns an error response with the given message and status code
 * @param {Response} res http response object
 * @param {String} message custom error message
 * @param {Number} [status=500] http error status
 * @returns {Response} http response with error status and message
 */
const errorResponse = (
	errors: unknown,
	res: Response,
	message: unknown,
	status = 500
) => {
	let errMessage: any;
	if (message == null) {
		switch (status) {
			case 400:
				errMessage = 'Bad Request';
				break;
			case 403:
				errMessage = 'Forbidden';
				break;
			case 404:
				errMessage = 'Resource not found';
				break;
			case 503:
				errMessage = 'Service Unavailable';
				break;
			default:
				errMessage = 'Internal server error';
				break;
		}
	} else {
		errMessage = message;
	}

	return res.status(status).send({
		error: {
			errors,
			code: status,
			message: errMessage.replace(/["]/gi, '')
		}
	});
};

const getErrorMessage = (error: unknown) => {
	if (error instanceof Error) return error.message;
	return String(error);
};
export {successResponse, errorResponse, getErrorMessage};
