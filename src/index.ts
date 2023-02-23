/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express, {Application, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {errorResponse} from './utils/response_parser';
import {userRouter} from './v1/routes/user.router';
import {adminRouter} from './v1/routes/admin.router';
import {mongodbConnect} from './config/mongodb';
import {Session} from './model/sessions.model';
import {authRouter} from './v1/routes/auth.route';
dotenv.config();

const app: Application = express();
// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT_NUMBER || 8000;

app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(async (req: Request, res: Response, next: NextFunction) => {
	console.log(req.cookies.user_data);
	const storedSession = req.cookies.user_data;
	if (storedSession === undefined || storedSession === null) {
		// no session token in cookie
		errorResponse(res, 'Who you be', Error('Sign In or Up'), 404);
		return;
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
			next();
		}
		req.cookies = session;
		next();
	}
	console.log(req.cookies);
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.use((_req: Request, res: Response, _next: NextFunction) => {
	const error = new Error('Route not found');
	errorResponse(res, 'Not Found', error, 404);
});

const bootstrap = async () => {
	try {
		await mongodbConnect();
		app.listen(PORT, () => {
			console.log(
				`Server is listening on port ${PORT}...\nVisit http://localhost:${PORT}/`
			);
		});
	} catch (error) {
		console.log(error);
	}
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
