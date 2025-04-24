import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  // In a real app, you'd get this from a state management solution like Redux
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tech Pro Ankle',
      price: 24.99,
      image: '/images/tech-pro-ankle.jpg',
      quantity: 2
    },
    {
      id: 2,
      name: 'Daily Comfort Crew',
      price: 22.99,
      image: '/images/daily-comfort-crew.jpg',
      quantity: 1
    }
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 55 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Stripe checkout will be integrated here');
    // In a real app, this would redirect to a Stripe checkout page
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shipping === 0
                    ? 'Free'
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              <div className="stripe-info">
                <p>Payment secured by Stripe</p>
                <small>(Future integration)</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 