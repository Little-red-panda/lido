import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (
	state: Pick<State, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

