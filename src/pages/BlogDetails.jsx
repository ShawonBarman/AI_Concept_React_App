import React from 'react'
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './blogDetails_css.css';
import { blogs } from './../data/aiData.jsx';

export default function BlogDetails() {
  // let use_location = useLocation()
  // let currentId = use_location.pathname.split('/')[2];
  // console.log(currentId);
  // console.log(useParams());
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find((b) => b.id === parseInt(id)); // Find the blog by ID
  
  if (!blog) {
    return (
      <div>
        <h2>Blog not found!</h2>
      </div>
    );
  }
  
  return (
    <>
      <Header />

      <div className="blog-details">
          <div className="container">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
              <span className="category">Category: {blog.category}</span>
              <span className="created-at">Published on: {new Date(blog.created_at).toLocaleDateString()}</span>
          </div>
          <p className="blog-description">{blog.description}</p>
          </div>
      </div>

      <Footer />
    </>
  );
}
