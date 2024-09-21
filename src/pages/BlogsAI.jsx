import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './blogsAI_css.css';
import { blogs } from './../data/aiData.jsx';
import { Link } from 'react-router-dom';

export default function BlogsAI() {
    let allblogs = blogs.map((v, i) => {
        return (
            <div className="card" key={i}>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <button>
                    <Link to={`/blogs-ai/${v.id}`}>See More</Link>
                </button>
            </div>
        );
    });

    return (
        <>
            <Header />

            <div className="allblogs">
                <div className="container">
                    {allblogs}
                </div>
            </div>
            
            <Footer />
        </>
    );
}