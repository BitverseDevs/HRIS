import { createAction } from '@reduxjs/toolkit';


export const userLogin = createAction<{username: string, password: string, twoFactorToken?: string}>('USER_LOGIN');
export const userLoginSuccess = createAction<string>('USER_LOGIN_SUCCESS');
export const userLoginFailure = createAction<string>('USER_LOGIN_FAILURE');


export const userLogout = createAction('USER_LOGOUT');