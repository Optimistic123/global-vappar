// BlogDetail.js

// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogDetail = () => {
    const { id } = useParams();
    const blogs = useSelector((state) => state.blog.blogs);
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
