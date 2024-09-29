/*
  File Name: Projects.js
  Student’s Name: Shawna Halladeen
  Student ID: 301154976
  Date: September 28, 2024
*/

// Projects component to display a list of highlighted projects
import React from 'react';
import VitalSense from '../../../assets/vitalsense.png';
import Koda from '../../../assets/Koda.png';
import NibbleNoodle from '../../../assets/snake.png';
import './Project.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-list">
                {/* Nibble Noodle Project */}
                <div className="project">
                    <img src={NibbleNoodle} alt="nibble noodle" />
                    <h3>Nibble Noodle</h3>
                    <p>A simple pixel snake game built with JavaScript, HTML, and CSS</p>
                </div>
                {/* VitalSense Project */}
                <div className="project">
                    <img src={VitalSense} alt="VitalSense" />
                    <h3>VitalSense</h3>
                    <p>A pulse sensor made with Arduino. Frontend made with React, backend made with Node.js and Express.js</p>
                </div>
                {/* Koda Project */}
                <div className="project">
                    <img src={Koda} alt="Koda" />
                    <h3>Koda</h3>
                    <p>A personal study app project made with React and Chakra UI for the frontend, and utilizes MongoDB and Azure for the backend</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
