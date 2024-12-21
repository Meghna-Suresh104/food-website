import React, { useState } from 'react';
import './Auth.css'; // Import the updated CSS file

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (isSignup && !formData.username)) {
      setErrorMessage('Please fill all fields');
      return;
    }

    if (isSignup) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Signup successful! Please login now.');
    } else {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        alert('Login successful!');
      } else {
        setErrorMessage('Invalid email or password');
      }
    }

    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {isSignup && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>

        <p>
          {isSignup
            ? 'Already have an account?'
            : 'Don’t have an account?'}
          <button className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
