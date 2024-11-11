import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Whyus from './pages/Whyus';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import ProtectedRoute from './components/ProtectedRoute';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />


        {/* <Route path="/login" element={<Login />} /> */}
        {/* Protected Route */}
        {/* <Route element={<ProtectedRoute component={Home} isAuth={true}/>}>
          <Route path="/profile" element={<Profile />} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
