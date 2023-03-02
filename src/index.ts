/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express, {Application, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {userRouter} from '@routes/user.router';
import {adminRouter} from '@routes/admin.router';
import {mongodbConnect} from '@config/mongodb';
import {authRouter} from '@routes/auth.route';
import {errorResponse} from '@src/utils/response_parser';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT_NUMBER || 8000;

app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use('/api/v1/auth', authRouter);
app.use(async (req: Request, res: Response, next: NextFunction) => {
	console.log(req.cookies.user_data);
	const storedSession = req.cookies.user_data;
	if (storedSession === undefined || storedSession === null) {
		errorResponse(res, 'Who are you?', Error('Sign In or Up'), 404);
		return;
	}
	next();
});

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.use((_req: Request, res: Response, _next: NextFunction) => {
	res.status(408).json('error route');
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

bootstrap();
