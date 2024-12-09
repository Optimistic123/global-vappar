// BlogList.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../store/blogSlice';
import "./BlogList.scss"
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
                <Shimmer type={"blogShimmer"} />
            ) : (
                <div>
                    <div className="blog-header">
                        <h2>Global Vyapar blog</h2>
                        <p>Stay ahead with latest Cross-Border insights</p>
                    </div>

                    <div className="blog-grid">
                        {blogs.length > 0 && blogs?.map((blog) => (
                            <div key={blog.id} className="blog-card">
                                <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
                                <h3>{blog.title}</h3>
                                <p>{blog.summary}</p>
                                <div className='black-border'></div>
                                <div className='blog-summary'>
                                    <div className='blog-meta'>
                                        <p>Team Global Vyapar</p>
                                        <ul>
                                            <li>7 DECEMBER 2024</li>
                                        </ul>
                                    </div>
                                    <Link to={`/blog/${blog.id}`} className="read-more">
                                        Read More
                                    </Link>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
};

export default BlogList;
