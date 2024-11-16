// features/courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    courses: [],
    isLoading: true
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
            state.isLoading = false;
        },
        fetchCourses: (state, action) => {
            // This can be used to trigger the saga with a payload
        },
    },
});

export const { setCourses, fetchCourses } = courseSlice.actions;
export default courseSlice.reducer;
