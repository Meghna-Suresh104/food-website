import React, { useState } from 'react';
import './Menu.css'; 
function Menu({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [showPopup, setShowPopup] = useState(false); 
  const [popupMessage, setPopupMessage] = useState('');
  const [filter, setFilter] = useState('all'); 

  const menuItems = [
    { id: 1, name: 'Indian', description: 'North Indian Thali', price: 5.99, image: 'indian.jpg', category: 'veg' },
    { id: 2, name: 'Pizza', description: 'Cheesy pizza with pepperoni', price: 8.99, image: 'pizza.jpg', category: 'non-veg' },
    { id: 3, name: 'Pasta', description: 'Pasta with creamy Alfredo sauce', price: 7.99, image: 'pasta.jpg', category: 'veg' },
    { id: 4, name: 'Ramen', description: 'Ramen with Eggs and chicken', price: 4.99, image: 'ramen.jpg', category: 'non-veg' },
    { id: 5, name: 'Fries', description: 'Crispy French fries', price: 2.99, image: 'fries.jpg', category: 'veg' },
    { id: 6, name: 'Sushi', description: 'Assorted sushi rolls', price: 12.99, image: 'sushi.jpg', category: 'non-veg' },
    { id: 7, name: 'Tacos', description: 'Soft tacos with chicken and salsa', price: 6.99, image: 'taco.jpg', category: 'non-veg' },
    { id: 8, name: 'Ice Cream', description: 'Vanilla ice cream with chocolate sauce', price: 3.99, image: 'icecream.jpg', category: 'veg' },
    { id: 9, name: 'Coffee', description: 'Hot brewed coffee', price: 2.49, image: 'coffee.jpg', category: 'veg' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupMessage(`${item.name} has been added to your cart!`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for food..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search-input"
        />
      </div>

      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'veg' ? 'active' : ''} onClick={() => setFilter('veg')}>Veg</button>
        <button className={filter === 'non-veg' ? 'active' : ''} onClick={() => setFilter('non-veg')}>Non-Veg</button>
      </div>

      {filteredItems.length > 0 ? (
        <div className="menu-cards">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <img src={`./images/${item.image}`} alt={item.name} className="menu-card-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">₹{(item.price * 83).toFixed(2)}</p>
              <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}

      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Menu;
