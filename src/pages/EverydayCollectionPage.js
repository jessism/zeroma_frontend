import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EverydayCollectionPage.css';

const EverydayCollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        // Filter for everyday socks (showing a maximum of 9)
        const everydayProducts = response.data
          .filter(product => product.category === 'everyday' || product.tags?.includes('everyday'))
          .slice(0, 9);
          
        setProducts(everydayProducts);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        
        // For demo purposes, create mock products if API fails
        const mockProducts = [
          {
            id: 'atlas-crew',
            name: 'Atlas Crew Sock',
            price: 15,
            image: 'https://images.unsplash.com/photo-1586906505113-ba824de21cc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e2',
            name: 'Foxy Crew Socks',
            price: 22.99,
            image: 'https://images.unsplash.com/photo-1586850931279-cb7631464f22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e3',
            name: 'Free Ride Crew Socks',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e4',
            name: 'Comfort Tech Socks',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1581049075571-3c9dbc9e73d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e5',
            name: 'Urban Commuter Socks',
            price: 21.99,
            image: 'https://images.unsplash.com/photo-1589383584763-d4646f2e8a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e6',
            name: 'Mountain Trail Socks',
            price: 23.99,
            image: 'https://images.unsplash.com/photo-1605603661977-ca65224c8752?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e7',
            name: 'Daily Comfort Ankle Socks',
            price: 18.99,
            image: 'https://images.unsplash.com/photo-1613135405427-ac8b9ba05180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e8',
            name: 'Office Style Crew Socks',
            price: 22.99,
            image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          },
          {
            id: 'e9',
            name: 'Midnight Walk Socks',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'everyday'
          }
        ];
        
        setProducts(mockProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle image loading errors
  const handleImageError = (e) => {
    // Fallback to a default image if the main image fails to load
    e.target.src = 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div className="collection-page everyday-collection">
      <div className="collection-hero">
        <div className="collection-hero-content">
          <div className="collection-stars">★★★★★</div>
          <h1>Everyday and Work Socks</h1>
          <p className="collection-subtitle">Style, comfort, and durability—everyday essentials.</p>
          
          <div className="collection-features">
            <div className="feature">
              <span className="feature-icon">💫</span>
              <span className="feature-text">Exceptional Comfort</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✨</span>
              <span className="feature-text">Bold Designs</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">Perfect Fit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container products-container">
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="no-products">No products found.</div>
            ) : (
              <div className="products-grid">
                {products.map(product => (
                  <div className="product-card" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <div className="product-image">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          onError={handleImageError}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-tags">ALL-DAY PERFORMANCE</div>
                        <h3>{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EverydayCollectionPage; 