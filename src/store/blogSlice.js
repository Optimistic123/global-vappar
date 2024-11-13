// features/courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    blogs: [],
    blogDetail: {},
    isBlogLoading: true,
    isBlogDetailLoading: true
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
            state.isBlogLoading = false;
        },
        setBlogDetails: (state, action) => {
            state.blogDetail = action.payload;
            state.isBlogDetailLoading = false;
        },
        fetchBlogs: (state, action) => {
            // This can be used to trigger the saga with a payload
        },
        fetchBlogDetails: (state, action) => {
            // This can be used to trigger the saga with a payload
        }
    },
});

export const { setBlogs, fetchBlogs, setBlogDetails, fetchBlogDetails } = blogSlice.actions;
export default blogSlice.reducer;
