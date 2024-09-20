import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/components/pages/Home';
import About from './src/components/pages/About';
import Contact from './src/components/pages/Contact';
import Education from './src/components/pages/Education';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
