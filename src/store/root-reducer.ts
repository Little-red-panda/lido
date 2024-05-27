import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './UserProcess/UserProcess';
import { employeesData } from './EmployeesData/EmployeesData';

export const rootReducer = combineReducers({
	[NameSpace.User]: userProcess.reducer,
	[NameSpace.Employees]: employeesData.reducer,
});

