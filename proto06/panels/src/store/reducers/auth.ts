import { createSlice } from '@reduxjs/toolkit';
import { 
  userLogin, 
  userLoginSuccess, 
  userLoginFailure, 
  userLogout,
  // fetchUserData,
  fetchUserDataSuccess,
  // fetchUserDataFailure,
} from '../actions/auth';
import { UserType, EmployeeDetailsType } from '@/types/types-store';


interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: UserType | null; // Add user and employee fields
  employee_detail: EmployeeDetailsType | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null, // Initialize user and employee fields
  employee_detail: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = null;
      })
      .addCase(userLoginSuccess, (state, action) => 
      { 
        state.isAuthenticated = true;
        state.token = action.payload.jwt; // Update this line to access the JWT from the payload
        state.user = action.payload.user; // Store user and employee details
        state.employee_detail = action.payload.employee_detail;
        state.error = null;
      }
      )
      .addCase(userLoginFailure, (state, action) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = action.payload;
      })
      .addCase(userLogout, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = null;
        state.employee_detail = null; 
      })
      // .addCase(fetchUserData, (state) => {
      //   state.employee_detail = null; 
      // })
      .addCase(fetchUserDataSuccess, (state, action) => {
        state.employee_detail = action.payload.employee_detail;
      });
  },
});

export const authReducer = authSlice.reducer;