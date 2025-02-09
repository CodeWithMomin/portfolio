import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import Instagram and LinkedIn icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span >CodeWithMomin</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
