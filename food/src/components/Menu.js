import React, { useState } from 'react';
import './Menu.css'; // Link to the Menu styling CSS

function Menu({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const [popupMessage, setPopupMessage] = useState(''); // State to set the popup message

  // Define your menu items here
  const menuItems = [
    { id: 1, name: 'Indian', description: 'North Indian Thali', price: 5.99, image: 'indian.jpg' },
    { id: 2, name: 'Pizza', description: 'Cheesy pizza with pepperoni', price: 8.99, image: 'pizza.jpg' },
    { id: 3, name: 'Pasta', description: 'Pasta with creamy Alfredo sauce', price: 7.99, image: 'pasta.jpg' },
    { id: 4, name: 'Ramen', description: 'Ramen with Eggs and chicken', price: 4.99, image: 'ramen.jpg' },
    { id: 5, name: 'Fries', description: 'Crispy French fries', price: 2.99, image: 'fries.jpg' },
    { id: 6, name: 'Sushi', description: 'Assorted sushi rolls', price: 12.99, image: 'sushi.jpg' },
    { id: 7, name: 'Tacos', description: 'Soft tacos with chicken and salsa', price: 6.99, image: 'taco.jpg' },
    { id: 8, name: 'Ice Cream', description: 'Vanilla ice cream with chocolate sauce', price: 3.99, image: 'icecream.jpg' },
    { id: 9, name: 'Coffee', description: 'Hot brewed coffee', price: 2.49, image: 'coffee.jpg' }
  ];

  // Filter the menu items based on the search query
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle adding an item to the cart
  const handleAddToCart = (item) => {
    addToCart(item); // Call the parent component's addToCart function
    setPopupMessage(`${item.name} has been added to your cart!`); // Set the popup message
    setShowPopup(true); // Show the popup

    // Automatically hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for food..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search-input"
        />
      </div>

      {/* Display the filtered items */}
      {filteredItems.length > 0 ? (
        <div className="menu-cards">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <img src={`./images/${item.image}`} alt={item.name} className="menu-card-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found</p> // Correct placement for JSX comment
      )}

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Menu;
