import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { ApiResponse } from './EmployeeData';
import { UserData } from './UserData';

export type UserProcess = {
	authorizationStatus: AuthorizationStatus;
	userData: UserData | null;
};

export type EmployeesAPIData = {
	employeesData: ApiResponse | null;
	isLoading: boolean;
	hasError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
