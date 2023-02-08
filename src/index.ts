/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express, {Application, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

import {errorResponse} from './utils/response_parser';
dotenv.config();

const app: Application = express();
// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const PORT = process.env.PORT_NUMBER || 8000;

app.use(morgan('combined'));
app.use(express.json());

app.use('/api', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).send({
		data: 'Hello from server'
	});
});

app.use((_req: Request, res: Response, _next: NextFunction) => {
	const error = new Error('Route not found');
	errorResponse(res, 'Not Found', error, 404);
});

const bootstrap = async () => {
	try {
		// await mongodbConnect();
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
