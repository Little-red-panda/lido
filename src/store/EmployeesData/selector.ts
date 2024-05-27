import { NameSpace } from '../../const';
import { ApiResponse } from '../../types/EmployeeData';
import { State } from '../../types/state';

export const getEmployees = (
	state: Pick<State, NameSpace.Employees>
): ApiResponse | null => state[NameSpace.Employees].employeesData;
export const getEmployeesLoadingStatus = (
	state: Pick<State, NameSpace.Employees>
): boolean => state[NameSpace.Employees].isLoading;
export const getErrorStatus = (state: State): boolean =>
	state[NameSpace.Employees].hasError;

