import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import { ToastContainer,Slide } from 'react-toastify';
import './App.css'

const App = () => {
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Homepage />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
