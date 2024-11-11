// features/courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    blogs: [],
    blog: {}
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        setBlog: (state, action) => {
            state.blog = action.payload;
        },
        fetchBlogs: (state, action) => {
            // This can be used to trigger the saga with a payload
        },
        fetchBlog: (state, action) => {
            // This can be used to trigger the saga with a payload
        }
    },
});

export const { setBlogs, fetchBlogs, fetchBlog } = blogSlice.actions;
export default blogSlice.reducer;
