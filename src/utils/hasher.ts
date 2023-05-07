import * as crypto from 'crypto';
import {repositoryContainer} from 'src/repositories/index.repository';

export const hashPassword = (password: string) => {
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto
		.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
		.toString('hex');
	return {
		salt,
		hash
	};
};

export const verifyPassword = async (email: string, password: any) => {
	const user = await repositoryContainer.getUserDetailsRepo(email);
	const inputHash = crypto
		.pbkdf2Sync(
			password,
			user?.password?.salt as crypto.BinaryLike,
			1000,
			64,
			'sha512'
		)
		.toString('hex');

	if (user?.password?.hash !== inputHash) {
		return false;
	} else {
		return true;
	}
};
