import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/logoAnimation.json'; 
import './Header.css';

function Header() {
  const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', 
    },
  };

  return (
    <header>
      <nav className="navbar">
        
        <div className="logo-container">
          
          <Lottie options={defaultOptions} height={80} width={80} />

         
          <div className="logo-text">
            <h1 className="logo">Fusion Station</h1>
            
            <p className="logo-subtext">Bringing Flavors to Life</p>
          </div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/auth">Login / Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
