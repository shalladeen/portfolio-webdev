import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Education from './components/pages/Education';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
