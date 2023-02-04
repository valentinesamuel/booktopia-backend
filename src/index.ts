import express, {Application, Response} from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use('/', (_req, res: Response, _next) => {
	res.status(200).send({data: 'Hello from my own personal server'});
});

app.listen(PORT, () => {
	console.log(`Server is Listening on port ${PORT}...`);
});
