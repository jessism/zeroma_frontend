import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Sticky Banner */}
      <div className="sticky-banner">
        <p>Free shipping over $55</p>
      </div>

      {/* Menu Bar */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <Link to="/">
              <h1>Zeroma</h1>
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/products">Socks</Link></li>
              <li><Link to="/products?category=packs">Socks Packs</Link></li>
              <li><Link to="/products?category=bestsellers">Best Sellers</Link></li>
            </ul>
          </nav>
          <div className="cart">
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 