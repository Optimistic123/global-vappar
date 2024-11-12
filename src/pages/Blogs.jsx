// Blog.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Blogs = () => (
    <div>
        <Outlet /> {/* Renders child routes here */}
    </div>
);

export default Blogs;
