import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import './home_css.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    
    const sendEmail = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const templateParams = {
            to_name: 'Shawon Barman', // Your name (the recipient)
            from_name: formData.name, // The sender's name (from the form)
            message: formData.message, // The message from the form
            reply_to: formData.email,  // The sender's email for reply purposes
        };
    
        emailjs
          .send(
            'service_hg4u5yg',
            'template_1uh8i7h',
            templateParams,
            '8safwFkskouvxLPRV'
        )
        .then(
            (result) => {
                alert('Message Sent Successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                setIsLoading(false);
            },
            (error) => {
                alert('An error occurred, please try again.');
                setIsLoading(false);
            }
        );
    };
    
    return (
    <>
        <Header />

        <section id="home" className="hero">
            <div className="container">
                <h2>Welcome to the World of AI</h2>
                <p>Discover the power of Artificial Intelligence and its impact on the future.</p>
                <button className="btn">
                    <Link to="/about-ai">Learn More</Link>
                </button>
            </div>
        </section>

        <section id="about">
            <div className="container">
                <h2 className="section-title">About AI</h2>
                <p>
                Artificial Intelligence (AI) refers to the ability of machines and computers to mimic human cognitive functions such as learning, problem-solving, decision-making, and adapting to new situations. It encompasses a wide range of technologies, including machine learning, natural language processing, computer vision, and robotics. Through AI, machines can process vast amounts of data, recognize patterns, and make informed decisions or predictions. From virtual assistants like Siri and Alexa to self-driving cars and advanced medical diagnostics, AI is transforming industries and revolutionizing the way we live and work. Its potential continues to grow, promising innovations that could surpass human capabilities in many areas, enabling smarter automation, improved efficiencies, and even creating entirely new possibilities that were once thought to be exclusive to human intelligence.
                </p>
            </div>
        </section>

        <section id="applications" className="ai-applications-section">
            <div className="container">
                <h2 className="section-title section-title1">AI Applications</h2>
                <ul className="applications-list">
                    <li><strong>Healthcare:</strong> AI improves diagnostics and patient care.</li>
                    <li><strong>Autonomous Vehicles:</strong> AI powers self-driving cars and drones.</li>
                    <li><strong>Finance:</strong> AI detects fraud and automates financial processes.</li>
                    <li><strong>Robotics:</strong> AI controls robots for manufacturing and other tasks.</li>
                    <li><strong>Natural Language Processing:</strong> AI powers chatbots and virtual assistants.</li>
                    <li><strong>E-commerce:</strong> AI personalizes customer experiences and improves recommendations in online shopping.</li>
                </ul>

                <h2 className="section-title section-title2">Emerging AI Technologies</h2>
                <ul className="technologies-list">
                    <li><strong>Quantum Computing:</strong> AI algorithms that leverage the power of quantum computers for faster processing.</li>
                    <li><strong>Edge AI:</strong> AI algorithms running on edge devices, bringing intelligence closer to the source of data.</li>
                    <li><strong>AI in Cybersecurity:</strong> Using AI to detect, prevent, and respond to cyber threats in real-time.</li>
                    <li><strong>Generative AI:</strong> AI models that can create content, including text, images, music, and more.</li>
                    <li><strong>Explainable AI:</strong> AI systems that provide transparent and understandable decisions.</li>
                    <li><strong>AI for Climate Change:</strong> AI is used to analyze environmental data, helping combat climate change by predicting trends and optimizing energy use.</li>
                </ul>
            </div>
        </section>
        
        <section id="future">
            <div className="container">
                <h2 className="section-title">The Future of AI</h2>
                <p>
                The future of AI promises to bring revolutionary advancements that will reshape industries, economies, and our daily lives. AI is expected to drive innovation across various fields, from enhancing personalized user experiences and predictive analytics to fully automating complex industries like manufacturing, logistics, and healthcare. In healthcare, AI could revolutionize medical diagnostics, enable precision medicine, and support robotic-assisted surgeries, offering more accurate and efficient treatments. In education, AI-powered tools could personalize learning paths for students, making education more accessible and effective. The integration of AI into smart cities will help optimize traffic systems, reduce energy consumption, and improve urban planning. As AI continues to evolve, its capabilities in natural language understanding, computer vision, and decision-making will allow it to tackle problems once thought to be unsolvable. Ethical considerations, such as data privacy and job displacement, will need to be addressed as AI becomes more ingrained in society. Nonetheless, AI’s potential to accelerate scientific discovery, enhance human creativity, and improve quality of life makes it one of the most exciting technological advancements of the 21st century.
                </p>
            </div>
        </section>

        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>

        <Footer />
    </>
  )
}
