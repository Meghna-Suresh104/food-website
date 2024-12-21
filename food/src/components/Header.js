import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/logoAnimation.json'; // Correct path to animation file
import './Header.css';

function Header() {
  // Lottie animation settings
  const defaultOptions = {
    loop: true, // Animation will loop
    autoplay: true, // Animation plays automatically
    animationData: animationData, // Your animation data imported from the JSON file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Adjust how the animation fits within the container
    },
  };

  return (
    <header>
      <nav className="navbar">
        {/* Logo container with Fusion Station text and tagline below */}
        <div className="logo-container">
          {/* Lottie animation */}
          <Lottie options={defaultOptions} height={80} width={80} />

          {/* Fusion Station Text */}
          <div className="logo-text">
            <h1 className="logo">Fusion Station</h1>
            {/* Tagline below the logo */}
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
