import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#home" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Labib</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-copy">
            © {year} Bustanul Labib Alwasi. Built with React & ❤️
          </p>
          <a href="#home" className="back-top" aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
