import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.DATABASE_URL;

mongoose.connection.once('open', () => {
	console.log('\nMongoDB Connection Ready..🚀✅🚀❇️🚀\n');
});
mongoose.connection.on('error', (error) => {
	console.error('\nMongoDB Connection Failed..🚩🚨🚩🚨⛔⚠️⛔⚠️\n', error);
});

async function mongodbConnect() {
	await mongoose.connect(MONGO_URL as string);
}

async function mongodbDisconnect() {
	await mongoose.disconnect();
}
export {mongodbConnect, mongodbDisconnect};
