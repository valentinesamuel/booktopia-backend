import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.DATABASE_URL;

mongoose.connection.once('open', () => {
	console.log('MongoDB Connection XDDDReady..🚀✅🚀❇️🚀');
});
mongoose.connection.on('error', (error) => {
	console.error('MongoDB Connection Failed..🚩🚨🚩🚨⛔⚠️⛔⚠️', error);
});

async function mongodbConnect() {
	await mongoose.connect(MONGO_URL as string);
}

async function mongodbDisconnect() {
	await mongoose.disconnect();
}
export {mongodbConnect, mongodbDisconnect};
