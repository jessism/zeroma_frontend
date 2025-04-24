import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category if provided
  const filteredProducts = category
    ? products.filter(product => {
        // This is a placeholder logic, adjust based on your actual data structure
        if (category === 'packs') {
          return product.name.includes('Pack');
        } else if (category === 'bestsellers') {
          return product.isBestSeller;
        }
        return true;
      })
    : products;

  const titleText = category 
    ? category === 'packs' 
      ? 'Sock Packs' 
      : category === 'bestsellers' 
        ? 'Best Sellers' 
        : 'All Products' 
    : 'All Socks';

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">{titleText}</h1>
        
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <div className="no-products">No products found.</div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <div className="product-card" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                    <button className="add-to-cart-btn">Add to Cart</button>
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

export default ProductsPage; 