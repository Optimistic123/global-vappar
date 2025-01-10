import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './components/About'
import BlogDetail from './components/BlogDetails';
import BlogList from './components/BlogList';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
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
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

