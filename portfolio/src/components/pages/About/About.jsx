import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>Hi, I’m Shawna! I’m a second year software engineering student who likes to create web and mobile app projects.
                I enjoy solving complex problems and creating user-friendly experiences. Below is a link to my resume.</p>
            <a href="/Resume_2024.pdf" download className="resume-link">Download My Resume</a>
        </div>
    );
};

export default About;
