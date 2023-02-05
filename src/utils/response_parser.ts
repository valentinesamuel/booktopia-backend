import {Response} from 'express';
import {Error} from 'mongoose';

const getErrorMessage = (error: unknown) => {
	if (error instanceof Error) return error.message;
	return String(error);
};

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
	message: string,
	data: unknown,
	status = 200
) => {
	let successMessage: string;
	if (message == null) {
		switch (status) {
			case 201:
				successMessage = 'Resource Created';
				break;
			case 204:
				successMessage = 'No Content to Return';
				break;
			default:
				successMessage = 'The request was successful';
				break;
		}
	} else {
		successMessage = message;
	}

	const resBody = {
		code: status,
		successMessage,
		data
	};

	return res.status(status).json(resBody);
};

/**
 * @description Returns an error response with the given message and status code
 * @param {Response} res http response object
 * @param {String} message custom error message
 * @param {Number} [status=500] http error status
 * @param {Error} error error type
 * @returns {Response} http response with error message, status, and custom error message
 */
const errorResponse = (
	res: Response,
	message: string,
	error: Error,
	status = 500
) => {
	let errMessage: string;
	if (message == null) {
		switch (status) {
			case 400:
				errMessage = 'Bad Request';
				break;
			case 401:
				errMessage = 'Unauthorised';
				break;
			case 403:
				errMessage = 'Forbidden';
				break;
			case 404:
				errMessage = 'Not Found';
				break;
			case 409:
				errMessage = 'Conflict';
				break;
			default:
				errMessage = 'Internal server error';
				break;
		}
	} else {
		errMessage = message;
	}
	const stringifiedError = getErrorMessage(error);
	return res.status(status).send({
		error: {
			stringifiedError,
			code: status,
			message: errMessage.replace(/["]/gi, '')
		}
	});
};

export {successResponse, errorResponse};
