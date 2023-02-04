import * as Cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

const cloudinary = Cloudinary.v2;
cloudinary.config({});

export {cloudinary};
