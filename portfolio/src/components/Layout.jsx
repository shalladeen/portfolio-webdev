/*
  File Name: Layout.js
  Student’s Name: Shawna Halladeen
  Student ID: 301154976
  Date: September 28, 2024
*/

// Layout component with navigation links and main content area
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">SH</div>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/services">Services</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
