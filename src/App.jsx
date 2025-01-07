import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Whyus from './pages/Whyus';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import BlogDetail from './components/BlogDetails';
import BlogList from './components/BlogList';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <Router>
      <div className='main-page'>
        <Navbar />
        <Layout>
          <div className={`page-container ${isMenuOpen ? 'blur' : ''}`}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blogs />}>
                <Route index element={<BlogList />} />
                <Route path=":id" element={<BlogDetail />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

// test comment
