import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchEmployeesAction } from '../api-actions';
import { EmployeesAPIData } from '../../types/state';

export const initialState: EmployeesAPIData = {
	employeesData: null,
	isLoading: true,
	hasError: false,
};

export const employeesData = createSlice({
	name: NameSpace.Employees,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchEmployeesAction.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(fetchEmployeesAction.fulfilled, (state, action) => {
				state.employeesData = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchEmployeesAction.rejected, (state) => {
				state.isLoading = false;
				state.hasError = true;
			});
	},
});
