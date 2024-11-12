// BlogList.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../store/blogSlice';
import "./BlogList.css"
import Shimmer from './Shimmer';

const BlogList = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    const isBlogLoading = useSelector((state) => state.blog.isBlogLoading);

    useEffect(() => {
        const filterPayload = { category: 'frontend', level: 'beginner' };
        if (blogs.length == 0) {
            dispatch(fetchBlogs(filterPayload));
        }
    }, [dispatch]);

    return (
        <div className="blog-list">
            {isBlogLoading ? (
                <Shimmer type={"blogShimmer"}/>
            ) : (
                <div className="blog-grid">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <h3>{blog.title}</h3>
                            <p>{blog.summary}</p>
                            <Link to={`/blog/${blog.id}`} className="read-more">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList;
