import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import './contact_css.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

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

        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Get in Touch</h2>
                <p>If you have any questions or would like to learn more about AI, feel free to contact us using the form below. We look forward to hearing from you!</p>
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
