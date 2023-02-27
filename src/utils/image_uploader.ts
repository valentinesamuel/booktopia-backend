import {cloudinary} from '../config/cloudinary';

// export const uploadImageToCloudinary = async (file: any) => {
// 	const result = await cloudinary.uploader.upload(file.tempFilePath, {
// 		public_id: `${Date.now()}`,
// 		resource_type: 'auto',
// 		folder: 'images'
// 	});

// 	return result.secure_url;
// };

export const uploadToCloudinary = async (file: any, book: any) => {
	try {
		const result = await cloudinary.uploader.upload(file.name, {
			public_id: `${book.title}`,
			resource_type: 'auto',
			folder: 'booktopia/books'
		});

		return result.secure_url;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to upload file to Cloudinary');
	}
};
