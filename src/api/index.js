import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Products API
export const getProducts = async () => {
  try {
    const response = await api.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    // In a real app with a proper backend, we would have an endpoint for a single product
    // For now, we get all products and filter
    const response = await api.get('/api/products');
    const product = response.data.find(p => p.id === parseInt(id));
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

// Future Stripe API Integration
export const createCheckoutSession = async (cartItems) => {
  try {
    // This endpoint will be implemented later when we add Stripe
    const response = await api.post('/api/create-checkout-session', { items: cartItems });
    return response.data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export default api; 