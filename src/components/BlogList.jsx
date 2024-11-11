// BlogList.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../store/blogSlice';


const BlogList = () => {
    // const blogs = [
    //     { id: 1, title: 'Introduction to React' },
    //     { id: 2, title: 'Advanced Redux Concepts' }
    // ];

    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    console.log("blogs:", blogs);
    useEffect(() => {
        // Dispatch fetchCourses with a payload (e.g., filter parameters)
        const filterPayload = { category: 'frontend', level: 'beginner' };
        if(blogs.length == 0) {
          dispatch(fetchBlogs(filterPayload));
        }
    }, [dispatch]);

    return (
        <div>
            <h2>All Blogs</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
