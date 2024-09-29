/*
  File Name: Home.js
  Student’s Name: Shawna Halladeen
  Student ID: 301154976
  Date: September 28, 2024
*/

// Home component displaying a welcome message and a link to the About page
import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Hi, I'm Shawna</h1>
            <br></br>  
            <p>My mission is to design and develop solutions that are both creative and efficient.</p>
            <a href="about" className="view-about-button">About Me</a>  
        </div>
    );
}
