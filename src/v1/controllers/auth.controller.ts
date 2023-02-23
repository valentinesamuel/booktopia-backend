/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
import {
	validateSiginUserData,
	validateSignUpUserData
} from '../../validations/user.validation';
import {encrypt} from '../../../encryption2';
import {hashPassword, verifyPassword} from '../../../hasher';
import {createSession} from '../../utils/cookie_maker';
import {errorResponse, successResponse} from '../../utils/response_parser';
import {serviceContainer} from '../services/index.service';
import {Session} from '../../model/sessions.model';

const signInUser = async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const {error, value} = validateSiginUserData(user);
		if (error != null) {
			errorResponse(res, 'Error encountered', error, 404);
		} else {
			const {email, password} = req.body;
			const userExists = await verifyPassword(email, password);
			if (userExists) {
				const signedInUser = await serviceContainer.signInUserService(value);
				const {first_name, last_name, user_id, subscribed_to_newsletter} =
					signedInUser;

				await createSession(
					req,
					res,
					{
						first_name,
						last_name,
						user_id,
						email,
						subscribed_to_newsletter
					},
					'user_data'
				);
				successResponse(res, 'Fetched successfully', value, 200);
			} else {
				errorResponse(
					res,
					'Unknown User',
					new Error('Incorrect credentials'),
					404
				);
			}
		}
	} catch (error) {
		errorResponse(res, 'Unknown user', error as Error);
	}
};

const signUpUser = async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const {error} = validateSignUpUserData(user);
		if (error != null) {
			errorResponse(res, 'Error encountered', error, 404);
		} else {
			const encryptedId = encrypt(uuidv4());
			const hashedPaswword = hashPassword(user.password);

			user.user_id = encryptedId;
			user.password = hashedPaswword;
			delete user.confirmPassword;

			const newUser = await serviceContainer.signUpUserService(user);
			console.log('You have been signed up');

			// eslint-disable-next-line @typescript-eslint/naming-convention
			const {first_name, last_name, user_id, email, subscribed_to_newsletter} =
				newUser;
			if (newUser) {
				await createSession(
					req,
					res,
					{
						first_name,
						last_name,
						user_id,
						email,
						subscribed_to_newsletter
					},
					'user_data'
				);
				successResponse(res, 'Fetched successfully', {newUser}, 200);
			}
		}
	} catch (error) {
		errorResponse(res, 'Failed to create user', error as Error, 404);
	}
};

const signOutUser = async (
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	const storedSession = req.cookies.user_data;
	console.log(req.cookies);

	if (storedSession === undefined || storedSession === null) {
		// no session token in cookie
		errorResponse(
			res,
			'You were not authenticated',
			Error('Sign In or Up'),
			404
		);
	} else {
		const session: any = await Session.findOne({
			session_id: storedSession.session_id
		});
		console.log(session);
		if (!session) {
			// session not found in database
			console.log('You need to login bruvh');
			errorResponse(res, 'You do not have permissions', Error('Sign In'), 404);
			return;
		}
		if (session?.expires_at > new Date()) {
			await Session.deleteOne({session_id: storedSession.session_id});
			req.cookies.user_data = null;
		}
	}
	successResponse(res, 'Su8ccessfully logged out', {}, 200);
};

export {signInUser, signUpUser, signOutUser};
