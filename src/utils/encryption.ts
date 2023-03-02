import * as crypto from 'crypto';

const encryptedIv = crypto.randomBytes(16);
// const encryptedIv = 'ea883b16202fb096781eea3322ada298';
const algorithm = 'aes-256-cbc';
const password = crypto.randomBytes(32);

export const encrypt = (id: string) => {
	const cipher = crypto.createCipheriv(algorithm, password, encryptedIv);

	let encryptedId = cipher.update(id, 'utf8', 'hex');
	encryptedId += cipher.final('hex');

	console.log('Original ID:', id);
	console.log('Encrypted ID:', encryptedId);
	return {encryptedId, iv: encryptedIv.toString('hex')};
};

export const decrypt = (encryptedId: string, encryptedIv: any) => {
	const decryptedIv = Buffer.from(encryptedIv, 'hex');
	const decipher = crypto.createDecipheriv(algorithm, password, decryptedIv);
	let decryptedId = decipher.update(encryptedId, 'hex', 'utf8');
	decryptedId += decipher.final('utf8');
	console.log('Encrypted ID:', encryptedId);
	console.log('Original ID:', decryptedId);
	return decryptedId;
};
