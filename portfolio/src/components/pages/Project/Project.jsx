import React from 'react';
import './Project.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project">
                    <img src="src/assets/snake.png" alt="nibble noodle" />
                    <h3>Nibble Noodle</h3>
                    <p>A simple pixel snake game built with JavaScript, HTML, and CSS</p>
                </div>
                <div className="project">
                    <img src="src/assets/vitalsense.png" alt="VitalSense" />
                    <h3>VitalSense</h3>
                    <p>A pulse sensor made with Arduino. Frontend made with React, backend made with Node.js and Express.js</p>
                </div>
                <div className="project">
                    <img src="src/assets/Koda.png" alt="Koda" />
                    <h3>Koda</h3>
                    <p>A personal study app project made with React and Chakra UI for the frontend, and utilizes MongoDB and Azure for the backend</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
