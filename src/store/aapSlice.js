// features/courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isMenuOpen: false
};

const appAslice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.isMenuOpen = action.payload;
        }
    },
});

export const { setMenu } = appAslice.actions;
export default appAslice.reducer;
