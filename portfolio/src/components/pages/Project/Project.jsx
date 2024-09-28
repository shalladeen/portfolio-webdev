import React from 'react';
import './Project.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project">
                    <img src="project1.jpg" alt="Project 1" />
                    <h3>Project Title 1</h3>
                    <p>A brief description of the project and its outcome.</p>
                </div>
                <div className="project">
                    <img src="project2.jpg" alt="Project 2" />
                    <h3>Project Title 2</h3>
                    <p>A brief description of the project and its outcome.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
