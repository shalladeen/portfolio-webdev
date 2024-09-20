import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" to="/">Home</Link> 
                    <Link className="nav-link" to="/about">About</Link> 
                    <Link className="nav-link" to="/contact">Contact</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
