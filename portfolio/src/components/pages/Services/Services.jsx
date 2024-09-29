/*
  File Name: Services.js
  Student’s Name: Shawna Halladeen
  Student ID: 301154976
  Date: September 28, 2024
*/

// Services component displaying the services offered with project images
import React from 'react';
import Koda from '../../../assets/Koda.png';
import NibbleNoodle from '../../../assets/snake.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1>Services</h1>
            <ul className="service-list">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>API Integration</li>
            </ul>

            {/* Project images */}
            <div className="service-images">
                <img src={Koda} alt="Koda project" className="koda-image" />
                <img src={NibbleNoodle} alt="Nibble Noodle project" className="snake-image" />
            </div>
        </div>
    );
};

export default Services;
