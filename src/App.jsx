import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import './App.css'

const App = () => {
  return (
    
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Homepage />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  );
};

export default App;
