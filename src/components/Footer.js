import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="footer-container">
          <div className="footer-subscribe">
            <h3>Our emails are coffee-powered too</h3>
            <p>Subscribe to get exclusive deals, coffee sock tips, and product launches—no spam, just comfort for your feet.</p>
            
            <div className="subscribe-form">
              <input type="email" placeholder="Email Address" className="email-input" />
              <button className="subscribe-button">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <p className="privacy-text">
              By signing up, you consent to our <Link to="/privacy">Privacy Policy</Link>. You may unsubscribe at any time.
            </p>
            
            <div className="social-icons">
              <a href="https://instagram.com/zeroma" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/zeroma" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://tiktok.com/@zeroma" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/bestsellers">Bestsellers</Link></li>
                <li><Link to="/collections/ankle">Ankle Socks</Link></li>
                <li><Link to="/collections/crew">Crew Socks</Link></li>
                <li><Link to="/collections/no-show">No-Show Socks</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><Link to="/mission">Our Mission</Link></li>
                <li><Link to="/technology">Coffee Technology</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/wholesale">Wholesale Inquiries</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Help</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/shipping">Shipping & Delivery</Link></li>
                <li><Link to="/returns">Returns & Exchanges</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/size-guide">Size Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Zeroma. All rights reserved.</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Zeroma. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer; 