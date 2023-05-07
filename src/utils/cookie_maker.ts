import {v4 as uuidv4} from 'uuid';
import {NextFunction, Request, Response} from 'express';
import { Session } from '../model/sessions.model';

export const createSession = async (
	_req: Request,
	res: Response,
	data: any,
	cookieName: string
) => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const {user_id, email, first_name, last_name} = data;
	const sessionId = uuidv4();
	const sessionData = {
		user_id,
		email,
		first_name,
		last_name
	};

	const sessionToken = {
		session_id: sessionId,
		data: sessionData
	};
	// const storeSess = await Session.create(sessionToken);

	res.cookie(cookieName, sessionToken, {maxAge: 60 * 60 * 1000});
	// console.log(req.cookies);
};

export const checkSession = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	const storedSession = req.cookies.user_data;
	if (storedSession === undefined || storedSession === null) {
		// no session token in cookie
		next();
	}
	const session: any = await Session.findOne({
		session_id: storedSession.session_id
	});
	if (session === undefined || session === null) {
		// session not found in database
		next();
	}

	req.cookies = session;
	// if the cookie has expired, redirect the request to sign in
	// console.log(req.cookies.user_data);
	next();
};
