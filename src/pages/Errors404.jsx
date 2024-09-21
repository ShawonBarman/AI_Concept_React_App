import React from 'react';
import { Link } from 'react-router-dom';
import './errors404_css.css';

export default function Errors404() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <h2 className="error-message">Oops! Page not found.</h2>
      <p className="error-description">
        We're sorry, but the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="error-button">
        Go Back to Home
      </Link>
      <div className="error-image-container">
        <img src="https://i.imgur.com/qIufhof.png" alt="404 Not Found" className="error-image" />
      </div>
    </div>
  );
}