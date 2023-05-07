import * as crypto from 'crypto';
import { repositoryContainer } from 'src/repositories/index.repository';

const encryptedIv = crypto.randomBytes(16);
const algorithm = 'aes-256-cbc';
const password = crypto.randomBytes(32);

export const encrypt = (id: string) => {
	const cipher = crypto.createCipheriv(algorithm, password, encryptedIv);

	let encryptedId = cipher.update(id, 'utf8', 'hex');
	encryptedId += cipher.final('hex');

	return `${encryptedId}:${encryptedIv.toString('hex')}`;
};

export const decrypt = (encryptedId: string) => {
	const [encryptedUserID, ivHex] = encryptedId.split(':');
	const decryptedIv = Buffer.from(ivHex, 'hex');
	const decipher = crypto.createDecipheriv(algorithm, password, decryptedIv);
	let decryptedId = decipher.update(encryptedUserID, 'hex', 'utf8');
	decryptedId += decipher.final('utf8');
	console.log('Encrypted ID:', encryptedId);
	console.log('Original ID:', decryptedId);
	return decryptedId;
};

export const verifyUserID = async (userID: string) => {
	// Retrieve encrypted user_id from MongoDB here
	const encryptedUserIDFromDB = await repositoryContainer.getUserDetailsRepo(
		userID
	);
	if (encryptedUserIDFromDB === null) {
		return new Error('User does not exist');
	}
	return Boolean(encryptedUserIDFromDB.user_id);
};

export const getEncryptedId = (encryptedIDandIV: string) => {
	const encryptedHex = encryptedIDandIV.split(':');
	return encryptedHex[0];
};
