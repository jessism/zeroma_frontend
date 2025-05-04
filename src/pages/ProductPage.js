import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('burgundy');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState(null);

  // Mock product data
  const mockProduct = {
    id: 'atlas-crew',
    name: 'Atlas Crew Sock',
    price: 15,
    isNew: true,
    rating: 5,
    reviews: 1448,
    description: 'Combining body-mapped cushioning with odor-absorbing coffee-infused yarns, Atlas Socks are designed to respond to a foot in motion - our original best-selling cut is built for versatile wear and comfort in every step.',
    features: [
      { name: 'Machine Washable', icon: 'machine-wash' },
      { name: 'Quick Dry', icon: 'quick-dry' },
      { name: 'Ventilated', icon: 'ventilated' }
    ],
    colors: [
      { name: 'black', hex: '#000000' },
      { name: 'white', hex: '#FFFFFF' },
      { name: 'gray', hex: '#888888' },
      { name: 'brown', hex: '#7B4733' },
      { name: 'burgundy', hex: '#800020' },
      { name: 'olive', hex: '#556B2F' },
      { name: 'beige', hex: '#F5F5DC' },
      { name: 'blue', hex: '#6082B6' },
      { name: 'navy', hex: '#000080' },
      { name: 'lightgray', hex: '#D3D3D3' },
    ],
    sizes: ['M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1586906505113-ba824de21cc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589459072535-550f4fae08d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589459072535-550f4fae08d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589459072535-550f4fae08d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    benefits: [
      { title: 'Abrasion Resistant', image: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { title: 'Recycled Content', image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { title: '500+ 5-Star Reviews', image: 'https://images.unsplash.com/photo-1569419918180-964f8f053003?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { title: 'No-Droop Design', image: 'https://images.unsplash.com/photo-1618517047922-26c5e45eb172?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
      { title: '3.5 kgCO2e Carbon Footprint', image: 'https://images.unsplash.com/photo-1568412382165-e9b8f08c1acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
    ]
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // In a real app, you would fetch the specific product by ID
        // const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        // setProduct(response.data);
        
        // For demo purposes, we'll use the mock product data
        setProduct(mockProduct);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        // Use mock data as fallback
        setProduct(mockProduct);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              onError={handleImageError}
            />
          </div>
          <div className="thumbnail-images">
            {product.images.slice(1).map((img, index) => (
              <div className="thumbnail" key={index}>
                <img 
                  src={img} 
                  alt={`${product.name} view ${index + 2}`} 
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details">
          {product.isNew && <div className="product-tag">New</div>}
          
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-pricing">
            <span className="price">${product.price}</span>
          </div>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              <span className="review-count">{product.reviews} Reviews</span>
            </div>
          </div>
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-features">
            {product.features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  {feature.icon === 'machine-wash' && <span>🧺</span>}
                  {feature.icon === 'quick-dry' && <span>💨</span>}
                  {feature.icon === 'ventilated' && <span>🕳️</span>}
                </div>
                <div className="feature-name">{feature.name}</div>
              </div>
            ))}
          </div>
          
          <div className="product-options">
            <div className="color-options">
              <div className="option-label">Color</div>
              <div className="color-swatches">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className={`color-swatch ${selectedColor === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>
            
            <div className="size-options">
              <div className="option-label">
                <span>Size</span>
                <Link to="/size-guide" className="size-guide">Size Guide</Link>
              </div>
              <div className="size-buttons">
                {product.sizes.map((size, index) => (
                  <button 
                    key={index} 
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="product-actions">
            <button className="add-to-cart-btn">Add To Cart</button>
            <button className="buy-now-btn">
              <span className="shop-text">Buy with</span>
              <span className="shop-pay">Shop Pay</span>
            </button>
          </div>
          
          <div className="shipping-info">
            <div className="shipping-item">
              <span className="icon">🚚</span>
              <span>Free Shipping & Returns</span>
            </div>
            <div className="shipping-item">
              <span className="icon">↩️</span>
              <span>Free 30-Day Returns & Exchanges</span>
            </div>
          </div>
          
          <div className="product-accordions">
            <div className={`accordion-item ${activeTab === 'notes' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleTab('notes')}>
                <h3>Engineer's Notes</h3>
                <span className="accordion-icon">{activeTab === 'notes' ? '−' : '+'}</span>
              </div>
              {activeTab === 'notes' && (
                <div className="accordion-content">
                  <p>Our Atlas Crew sock features a specialized knit structure that provides targeted cushioning where your foot needs it most. The coffee-infused yarn naturally fights odors and wicks moisture.</p>
                </div>
              )}
            </div>
            
            <div className={`accordion-item ${activeTab === 'fit' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleTab('fit')}>
                <h3>Fit</h3>
                <span className="accordion-icon">{activeTab === 'fit' ? '−' : '+'}</span>
              </div>
              {activeTab === 'fit' && (
                <div className="accordion-content">
                  <p>The Atlas Crew provides a secure, no-slip fit with gentle compression that stays up all day without feeling tight. The toe box has extra room and the arch is supported with light compression.</p>
                </div>
              )}
            </div>
            
            <div className={`accordion-item ${activeTab === 'care' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleTab('care')}>
                <h3>Care</h3>
                <span className="accordion-icon">{activeTab === 'care' ? '−' : '+'}</span>
              </div>
              {activeTab === 'care' && (
                <div className="accordion-content">
                  <p>Machine wash cold with like colors. Tumble dry low. Do not bleach, iron, or dry clean.</p>
                </div>
              )}
            </div>
            
            <div className={`accordion-item ${activeTab === 'returns' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleTab('returns')}>
                <h3>Returns & Payments</h3>
                <span className="accordion-icon">{activeTab === 'returns' ? '−' : '+'}</span>
              </div>
              {activeTab === 'returns' && (
                <div className="accordion-content">
                  <p>Free returns and exchanges within 30 days. We accept all major credit cards, PayPal, Shop Pay, Apple Pay, and Google Pay.</p>
                </div>
              )}
            </div>
            
            <div className={`accordion-item ${activeTab === 'bundle' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleTab('bundle')}>
                <h3>Bundle & Save</h3>
                <span className="accordion-icon">{activeTab === 'bundle' ? '−' : '+'}</span>
              </div>
              {activeTab === 'bundle' && (
                <div className="accordion-content">
                  <p>Save 15% when you buy 3+ pairs and 20% when you buy 6+ pairs. Discount applied automatically at checkout.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="product-benefits">
        <div className="benefits-grid">
          {product.benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-image">
                <img src={benefit.image} alt={benefit.title} onError={handleImageError} />
              </div>
              <div className="benefit-title">{benefit.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 