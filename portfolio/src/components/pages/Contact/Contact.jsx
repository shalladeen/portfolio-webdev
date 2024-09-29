/*
  File Name: Contact.js
  Student’s Name: Shawna Halladeen
  Student ID: 301154976
  Date: September 28, 2024
*/

// Importing the necessary modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

// Creating the Contact component
const Contact = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    // Return the JSX for the Contact component
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>

            {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            ) : (
                <div className="thank-you-message">
                    <h2>Thank you, {formData.firstName}!</h2>
                    <p>Your message has been received. You will be redirected to the homepage shortly.</p>
                </div>
            )}

            <div className="contact-info">
                <h2>Contact Information</h2>
                <br></br>
                <p>Email: shawnakatrina.halladeen@gmail.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Location: Toronto, ON</p>
            </div>
        </div>
    );
};

export default Contact;
