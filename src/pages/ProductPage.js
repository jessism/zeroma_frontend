import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`);
        const foundProduct = response.data.find(p => p.id === parseInt(id));
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`);
    // In a real app, you would dispatch an action to add to cart
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-navigation">
          <Link to="/products">← Back to Products</Link>
        </div>
        
        <div className="product-details">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-info-container">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
              </div>
              
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
            
            <div className="product-features">
              <h3>Features</h3>
              <ul>
                <li>Made from recycled coffee grounds</li>
                <li>Anti-odor and moisture-wicking properties</li>
                <li>Sustainable production process</li>
                <li>Machine washable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 