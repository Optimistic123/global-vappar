// Layout.js
import React from 'react';
import Footer from './Footer'; // Import the Footer component
import "./Layout.scss"

const Layout = ({ children, customFooter }) => {
  return (
    <div className="app-layout">
      <main>{children}</main> {/* Render page-specific content here */}
      {customFooter || <Footer />}
    </div>
  );
};

export default Layout;
