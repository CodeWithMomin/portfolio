import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            Code With Momin
        </div>
        <div className='links'>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
            
       


        <Routes>
            <Route path='about' element={<About.jsx/>}/>
            <Route path='contact' element={<Contact.jsx/>}/>
        </Routes>
    </div>
  )
}

export default Header