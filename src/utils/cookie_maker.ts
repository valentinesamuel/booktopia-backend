import {Session} from '../model/sessions.model';
import {v4 as uuidv4} from 'uuid';

export const addSession = async (data: any) => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const {user_id, email, password} = data;
	const sessionData = {user_id, email, password};
	const sessionId = uuidv4(); // Generate a unique ID for the session
	const session = {session_id: sessionId, data: sessionData};

	await Session.create(session);
	return sessionId;
};
