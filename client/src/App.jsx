import React, { useEffect, useState } from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Intro Page
import Open from "./components/Utilities/Open";
// Layouts
import Header from "./components/Layouts/Header";
// Pages
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Skill from './components/pages/Skill';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

const App = () => {
  const [showIntro, setShowIntro] = useState(true); // For Developing need to - {true}
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    if (showIntro) {
      const fadeTimer = setTimeout(() => {
        setIsFade(true);
      }, 3500);

      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 4100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(introTimer);
      };
    }
  }, [showIntro]);

  return (
    <>
      {showIntro ? (<Open fadingOut={isFade} />) : (
        <Router>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skill" element={<Skill />} />
              <Route path="project" element={<Project />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  )
};

export default App;
