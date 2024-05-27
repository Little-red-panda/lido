import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, NameSpace } from '../const';
import { saveToken } from '../services/token';
import { AuthData } from '../types/AuthData';
import { UserData } from '../types/UserData';
import { ApiResponse } from '../types/EmployeeData';

export const loginAction = createAsyncThunk<
	UserData,
	AuthData,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}
>(`${NameSpace.User}/login`, async ({ login, password }, { extra: api }) => {
	const { data } = await api.post<UserData>(APIRoute.Login, {
		login,
		password,
	});
	saveToken(data.data.token);
	return data;
});

export const fetchEmployeesAction = createAsyncThunk<
	ApiResponse,
	number,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}
>(
	`${NameSpace.Employees}/fetchEmployeesAction`,
	async (page, { extra: api }) => {
		const { data } = await api.get<ApiResponse>(
			`${APIRoute.Employee}?page=${page}`
		);
		return data;
	}
);

