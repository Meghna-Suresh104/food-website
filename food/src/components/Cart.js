// src/components/Cart.js
import React, { useState } from 'react';
import Lottie from 'react-lottie';  // Import Lottie component
import animationData from '../assets/animations/cart.json';  // Import your Lottie animation file
import './Cart.css';  // Optional: Add styles for the Cart component

function Cart({ cartItems, removeFromCart, total, addToCart }) {
  const [notification, setNotification] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // If cart is empty, show Lottie animation
  const isCartEmpty = cartItems.length === 0;

  // Lottie options
  const defaultOptions = {
    loop: true,  // Loop the animation
    autoplay: true,  // Autoplay the animation
    animationData: animationData,  // Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',  // Aspect ratio setting for responsiveness
    },
  };

  // Handle checkout
  const handleCheckout = () => {
    // Simulate checkout process
    setCheckoutComplete(true);
    setNotification('Your order has been successfully placed!');
    
    // Reset checkout after 3 seconds
    setTimeout(() => {
      setCheckoutComplete(false);
      setNotification('');
    }, 3000);
  };

  // Handle quantity change
  const handleQuantityChange = (id, action) => {
    // Increment or decrement item quantity by calling addToCart (to add) or removeFromCart (to remove)
    if (action === 'increment') {
      addToCart(id);  // Assuming addToCart accepts id to add the item to cart
    } else if (action === 'decrement') {
      removeFromCart(id);  // Remove the item
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        {/* Lottie Animation Next to the Cart Title */}
        <h2>Your Cart</h2>
        {isCartEmpty && (
          <Lottie options={defaultOptions} height={60} width={60} />
        )}
      </div>

      {isCartEmpty ? (
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={`./images/${item.image}`} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}

      {checkoutComplete && (
        <div className="checkout-notification">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
