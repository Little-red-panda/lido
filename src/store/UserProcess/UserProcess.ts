import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { loginAction } from '../api-actions';

export const initialState: UserProcess = {
	authorizationStatus: AuthorizationStatus.NoAuth,
	userData: null,
};

export const userProcess = createSlice({
	name: NameSpace.User,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(loginAction.fulfilled, (state, action) => {
				state.authorizationStatus = AuthorizationStatus.Auth;
				state.userData = action.payload;
			})
			.addCase(loginAction.rejected, (state) => {
				state.authorizationStatus = AuthorizationStatus.NoAuth;
			});
	},
});

