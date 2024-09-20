import React from 'react';
import {FiArrowDown} from 'react-icons/fi';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Hi, I'm Shawna</h1>
            <p>I'm a software engineering student</p>
            <a href="projects" className="view-projects-button">View Projects
                <FiArrowDown className="arrow-icon" />
            </a>
                
        </div>
    );
}
