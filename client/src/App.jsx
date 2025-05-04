import React, { useEffect, useState } from "react";
// Router
import { Routes, Route, useNavigate } from 'react-router-dom'
// Utilities
import Open from "./components/Utilities/Open";
import Swipe from "./components/Utilities/Swipe";
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
  const navigate = useNavigate()

  useEffect(() => {
    if (showIntro) {
      const fadeTimer = setTimeout(() => {
        setIsFade(true);
      }, 3500);

      const introTimer = setTimeout(() => {
        setShowIntro(false);
        navigate('/')
      }, 4100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(introTimer);
      };
    }
  }, [showIntro, navigate]);
  return (
    <>
    <Swipe>
      {showIntro ? (<Open fadingOut={isFade} />) : (
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skill" element={<Skill />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </Swipe>
    </>
  )
};

export default App;
