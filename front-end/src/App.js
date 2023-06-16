import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Community from './components/pages/Community';
import Membership from './components/pages/Membership'
import Faq from './components/pages/FAQ';
import About from './components/pages/About';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/membership" element={<Membership/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth/login" element={<Login/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
