import * as Cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

const cloudinary = Cloudinary.v2;
cloudinary.config({
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME
});

export {cloudinary};
