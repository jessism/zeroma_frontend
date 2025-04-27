import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>POWERED<br/>BY<br/>COFFEE</h2>
          <Link to="/products" className="cta-button">Shop now ›</Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers">
        <div className="container">
          <div className="section-header">
            <h2>Our bestsellers</h2>
            <Link to="/products" className="more-link">MORE</Link>
          </div>
          <div className="bestsellers-grid">
            <div className="bestseller-product">
              <Link to="/product/1">
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/crew-socks.png`} alt="Crew Socks" />
                </div>
                <div className="product-info">
                  <h3>CREW SOCKS</h3>
                  <p className="price">$20</p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product">
              <Link to="/product/2">
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/low-key-socks.png`} alt="Low Key Socks" />
                </div>
                <div className="product-info">
                  <h3>LOW KEY SOCKS</h3>
                  <p className="price">$15</p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product">
              <Link to="/product/3">
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/no-show-socks.png`} alt="No Show Socks" />
                </div>
                <div className="product-info">
                  <h3>NO SHOW SOCKS</h3>
                  <p className="price">$12</p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product">
              <Link to="/product/4">
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/fun-socks.png`} alt="Fun Socks" />
                </div>
                <div className="product-info">
                  <h3>FUN SOCKS</h3>
                  <p className="price">$18</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2>EVERY DAY LOW EFFORT</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <i className="fas fa-recycle"></i>
              <h3>Sustainable</h3>
              <p>Made from recycled coffee grounds</p>
            </div>
            <div className="benefit">
              <i className="fas fa-wind"></i>
              <h3>Breathable</h3>
              <p>Superior moisture control</p>
            </div>
            <div className="benefit">
              <i className="fas fa-tint-slash"></i>
              <h3>Odor-resistant</h3>
              <p>Stay fresh all day</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        <div className="container">
          <h2>SHOP NEW ARRIVALS</h2>
          <div className="product-grid">
            <div className="product">
              <Link to="/product/1">
                <img src={`${process.env.PUBLIC_URL}/images/tech-pro-ankle.jpg`} alt="Tech Pro Ankle" />
                <h3>Tech Pro Ankle</h3>
                <p>$24.99</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/product/2">
                <img src={`${process.env.PUBLIC_URL}/images/daily-comfort-crew.jpg`} alt="Daily Comfort Crew" />
                <h3>Daily Comfort Crew</h3>
                <p>$22.99</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/product/3">
                <img src={`${process.env.PUBLIC_URL}/images/performance-no-show.jpg`} alt="Performance No-Show" />
                <h3>Performance No-Show</h3>
                <p>$19.99</p>
              </Link>
            </div>
          </div>
          <Link to="/products" className="shop-button">SHOP NOW</Link>
        </div>
      </section>

      {/* Pack Discount Section */}
      <section className="pack-discount">
        <div className="container">
          <h2>PACK DISCOUNT</h2>
          <p>15-20% off when you bundle.</p>
          <Link to="/products?category=packs" className="shop-button">SHOP NOW</Link>
        </div>
      </section>

      {/* Made from Coffee Section */}
      <section className="made-from-coffee">
        <div className="container">
          <h2>MADE FROM COFFEE</h2>
          <div className="coffee-content">
            <div className="coffee-image">
              <img src={`${process.env.PUBLIC_URL}/images/coffee-fabric.jpg`} alt="Coffee Fabric" />
            </div>
            <div className="coffee-text">
              <p>Fabric technology hasn't changed for decades. But we are changing it for good. Maximize your comfort with our innovative fabrics.</p>
              <ul>
                <li>Moisture-wicking - Keeps feet dry all day</li>
                <li>Temperature regulating - Perfect in any weather</li>
                <li>Eco-friendly - Sustainable production process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 