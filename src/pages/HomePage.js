import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { initScrollAnimations } from '../utils/animations';

const HomePage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Sample products data for trends section
  const products = [
    {
      id: 1,
      name: "Fresh sweatshirts",
      image: `${process.env.PUBLIC_URL}/images/crew-socks.png`
    },
    {
      id: 2,
      name: "New drop from Supreme",
      image: `${process.env.PUBLIC_URL}/images/low-key-socks.png`
    },
    {
      id: 3,
      name: "Hats spring 2025",
      image: `${process.env.PUBLIC_URL}/images/no-show-socks.png`
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="animate">POWERED<br/>BY<br/>COFFEE</h2>
          <Link to="/products" className="cta-button animate delay-200">Shop now ›</Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers">
        <div className="container">
          <div className="section-header animate">
            <h2>Popular products</h2>
            <Link to="/products" className="view-all">View all products →</Link>
          </div>
          <div className="bestsellers-grid">
            <div className="bestseller-product animate delay-200">
              <Link to="/product/1">
                <div className="product-tag">New</div>
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/crew-socks.png`} alt="Crew Socks" />
                </div>
                <div className="product-info">
                  <h3>Crew Socks</h3>
                  <p className="price">
                    <span>€20</span>
                    <span className="original-price">€59</span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product animate delay-400">
              <Link to="/product/2">
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/low-key-socks.png`} alt="Low Key Socks" />
                </div>
                <div className="product-info">
                  <h3>Low Key Socks</h3>
                  <p className="price">€15</p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product animate delay-600">
              <Link to="/product/3">
                <div className="product-tag">New</div>
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/no-show-socks.png`} alt="No Show Socks" />
                </div>
                <div className="product-info">
                  <h3>No Show Socks</h3>
                  <p className="price">€12</p>
                </div>
              </Link>
            </div>
            <div className="bestseller-product animate delay-800">
              <Link to="/product/4">
                <div className="product-tag">Bestseller</div>
                <div className="product-image">
                  <img src={`${process.env.PUBLIC_URL}/images/fun-socks.png`} alt="Fun Socks" />
                </div>
                <div className="product-info">
                  <h3>Fun Socks</h3>
                  <p className="price">€18</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Made from Coffee Section */}
      <section className="made-from-coffee">
        <div className="container">
          <div className="coffee-content">
            <div className="coffee-text">
              <h2 className="animate">Born from Beans.<br/>Made for Movement.</h2>
              <p className="animate delay-200">Fabric technology hasn't changed for decades. But we are changing it for good. Maximise your comfort with our innovative fabrics.</p>
            </div>
            <div className="coffee-technologies">
              <div className="tech-item animate">
                <img src={`${process.env.PUBLIC_URL}/images/coolblend-tech.jpg`} alt="CoolBlend Technology" />
                <div className="tech-overlay">
                  <h3>Supreme CoolBlend<br/>Technology</h3>
                </div>
              </div>
              <div className="tech-item animate">
                <img src={`${process.env.PUBLIC_URL}/images/breezeblend-tech.jpg`} alt="BreezeBlend Technology" />
                <div className="tech-overlay">
                  <h3>Supreme BreezeBlend<br/>Technology</h3>
                </div>
              </div>
              <div className="tech-item animate">
                <img src={`${process.env.PUBLIC_URL}/images/airfibre-tech.jpg`} alt="AirFibre Technology" />
                <div className="tech-overlay">
                  <h3>Supreme AirFibre</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Natural Comfort Section */}
      <section className="natural-comfort">
        <div className="container">
          <div className="comfort-content">
            <div className="comfort-image animate">
              <img src={`${process.env.PUBLIC_URL}/images/natural-comfort.jpg`} alt="People running in field" />
            </div>
            <div className="comfort-text">
              <h2 className="animate">All Natural<br/>Comfort</h2>
              <div className="comfort-description animate delay-200">
                <p>We firmly believe that natural fabrics are best for your skin, and the planet.</p>
                <p>Wool is anti-microbial. Long-staple organic cotton is grown with zero harmful chemicals and safer for the farmers who grow them. Eucalyptus fibre is a biodegradable and renewable material.</p>
                <Link to="/about" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Style Section */}
      <section className="shop-style">
        <div className="container">
          <div className="social-content">
            <div className="social-left">
              <h2 className="animate">Shop by<br/>style</h2>
              <a href="https://instagram.com/zeroma" target="_blank" rel="noopener noreferrer" className="follow-button animate delay-200">
                Follow →
              </a>
            </div>
            <div className="social-right">
              <div className="social-cards">
                <div className="social-card animate delay-200">
                  <Link to="/product/1">
                    <img src={`${process.env.PUBLIC_URL}/images/social-style1.jpg`} alt="Everyday style" />
                    <p className="social-caption">Everyday Style</p>
                  </Link>
                </div>
                <div className="social-card animate delay-400">
                  <Link to="/product/2">
                    <img src={`${process.env.PUBLIC_URL}/images/social-style2.jpg`} alt="Athletic style" />
                    <p className="social-caption">Athletic Style</p>
                  </Link>
                </div>
                <div className="social-card animate delay-600">
                  <Link to="/product/3">
                    <img src={`${process.env.PUBLIC_URL}/images/social-style3.jpg`} alt="Funky style" />
                    <p className="social-caption">Funky Style</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        <div className="container">
          <div className="trends-header animate">
            <h2>Today's trends</h2>
            <Link to="/shop" className="view-more">view more <span>→</span></Link>
          </div>
          <div className="trends-grid">
            {products.map((product, index) => (
              <div className={`trend-card animate delay-${(index + 1) * 200}`} key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className="trend-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="trend-content">
                    <h3>{product.name}</h3>
                    <button className="trend-arrow">→</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pack Discount Section */}
      <section className="pack-discount">
        <div className="pack-container">
          <div className="pack-image">
            <img src={`${process.env.PUBLIC_URL}/images/sock-pack.png`} alt="Sock Pack" />
          </div>
          <div className="pack-content">
            <div className="pack-subtitle">ZEROMA PACKS | BUNDLE & SAVE</div>
            <h2>Socks pack special</h2>
            <p>We're making comfort more affordable. Buy any 3 pairs of socks and automatically get 15% off your order plus free shipping. The perfect way to refresh your sock drawer.</p>
            <Link to="/products?category=packs" className="pack-button">Shop now</Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Grid Style */}
      <section className="reviews-grid">
        <div className="container">
          <h2 className="animate">We are loved by 10,000+ customers</h2>
          
          <div className="reviews-container">
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-1.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Alex T.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"I've been wearing these socks everyday since getting them & they're still great, no odor, no green staining, even after showering with them."</p>
              </div>
            </div>
            
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-2.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Sandra H.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"These socks are super comfortable and breathable. My son wears them for sports and loves them. Friendly service too!"</p>
              </div>
            </div>
            
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-3.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Jamie L.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"The durability is impressive. I've had mine for over a year now and they still look brand new!"</p>
              </div>
            </div>
            
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-4.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Lisa M.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"I wanted to convince myself of the quality and that's why I ordered. I am very satisfied! The quality is great and definitely worth the money! I will order more!"</p>
              </div>
            </div>
            
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-5.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Simon K.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"These socks are just amazing! I already had the crew socks but now that I have the no-show ones, this is my new everyday favorite. Definitely recommend!"</p>
              </div>
            </div>
            
            <div className="review-card animate">
              <div className="review-content">
                <div className="review-header">
                  <div className="reviewer-img">
                    <img src={`${process.env.PUBLIC_URL}/images/reviewer-6.jpg`} alt="Customer" />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Taylor J.</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="review-text">"The delivery was very fast and I am completely satisfied with my products. I wear them almost every day!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default HomePage; 