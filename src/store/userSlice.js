// features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action to trigger login saga
        login: (state, action) => {
            
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        // Action for successful login
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        // Action for failed login
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        // Logout action
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
