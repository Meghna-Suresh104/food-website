import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/cart.json";
import "./Cart.css"; 

function Cart({ cartItems, removeFromCart, addToCart, total }) {
  const [notification, setNotification] = useState("");
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  
  const isCartEmpty = cartItems.length === 0;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setNotification("Your order has been successfully placed!");

    setTimeout(() => {
      setCheckoutComplete(false);
      setNotification("");
    }, 3000);
  };

  const handleQuantityChange = (item, action) => {
    if (action === "increment") {
      addToCart(item); 
    } else if (action === "decrement") {
      if (item.quantity > 1) {
        removeFromCart(item.id); 
      }
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        {isCartEmpty && <Lottie options={defaultOptions} height={60} width={60} />}
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
                      <button onClick={() => handleQuantityChange(item, "decrement")}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item, "increment")}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
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
