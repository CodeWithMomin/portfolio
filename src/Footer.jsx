import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import Instagram and LinkedIn icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://github.com/CodeWithMomin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/momin-zahoor-502b97222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/_mominzahoor?s=21" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/_mominzahoor_" target="_blank" rel="noopener noreferrer">
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
