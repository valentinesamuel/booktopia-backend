import {repositoryContainer} from '../../repositories/index.repository';
import {IUser} from '../../utils/types';

const signInUserService = async (user: IUser) => {
	const signedInUser = await repositoryContainer.signInUser(user);
	if (signedInUser == null) {
		throw new Error('User could not be retrieved');
	}
	return signedInUser;
};

const signUpUserService = async (user: IUser) => {
	const newUser = await repositoryContainer.signUpUser(user);
	if (newUser == null) {
		throw new Error('User could not be created');
	}
	return newUser;
};

export {signInUserService, signUpUserService};
