import {Session} from '../model/sessions.model';
import {v4 as uuidv4} from 'uuid';
import {Request, Response} from 'express';

export const createSession = async (
	_req: Request,
	res: Response,
	data: any
) => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const {user_id, email, first_name, last_name, subscribed_to_newsletter} =
		data;
	const sessionData = {
		user_id,
		email,
		first_name,
		last_name,
		subscribed_to_newsletter
	};

	const expiresAt = new Date().setFullYear(new Date().getFullYear() + 1);
	const sessionId = uuidv4();

	const sessionToken = {session_id: sessionId, expiresAt, data: sessionData};
	const storeSess = await Session.create(sessionToken);

	res.cookie('session_token', storeSess, {maxAge: expiresAt});

	// return sessionId;
	// next();
};

export const checkSession = async (req: Request, _res: Response) => {
	// check if the cookie-session exists in the db
	// or
	// check if the curernt user email exists in the db

	// if the cookie has expired, redirect the request to sign in
	req.cookies();
};
