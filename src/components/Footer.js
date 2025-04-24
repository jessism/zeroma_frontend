import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/products">Socks</Link></li>
              <li><Link to="/products?category=packs">Socks Packs</Link></li>
              <li><Link to="/products?category=bestsellers">Best Sellers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Info</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Zeroma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 