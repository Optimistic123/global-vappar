// Blog.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Blogs = () => (
    <div>
        <h1>Blogs Section</h1>
        <Outlet /> {/* Renders child routes here */}
    </div>
);

export default Blogs;
