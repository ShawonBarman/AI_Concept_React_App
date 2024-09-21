import React from 'react';
import './header_css.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <h1>Artificial Intelligence</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-ai" className={isActive('/about-ai')}>
                About AI
              </Link>
            </li>
            <li>
              <Link to="/applications" className={isActive('/applications')}>
                Applications
              </Link>
            </li>
            <li>
              <Link to="/future-of-ai" className={isActive('/future-of-ai')}>
                Future of AI
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact')}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs-ai" className={isActive('/blogs-ai')}>
                Blogs of AI
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}