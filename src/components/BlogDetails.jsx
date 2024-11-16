import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogDetails } from '../store/blogSlice';
import Shimmer from './Shimmer';
import './BlogDetail.scss'

const BlogDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const blogDetail = useSelector((state) => state.blog.blogDetail);
    const isBlogDetailLoading = useSelector((state) => state.blog.isBlogDetailLoading);

    useEffect(() => {
        dispatch(fetchBlogDetails({id}));
    }, [dispatch]);

    return (
        <div className='blog-details'>
            {isBlogDetailLoading ? (
                <Shimmer type={"blogDetailsShimmer"} />
            ) : (
                <div className="blog-content">
                    <h2>{blogDetail.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: blogDetail.content }}></div>
                </div>
            )}
        </div>
    );
};

export default BlogDetail;
