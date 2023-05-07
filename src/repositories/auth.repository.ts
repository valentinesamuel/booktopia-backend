import {User} from '../model/user.model';

const signUpUser = async (user: any) => {
	const newUser = await User.create(user);
	return newUser;
};

const signInUser = async (user: any) => {
	const signedInUser = await User.findOne(
		{email: user.email},
		{email: 1, first_name: 1, last_name: 1, user_id: 1, password: 1}
	);
	return signedInUser;
};

export {signInUser, signUpUser};
