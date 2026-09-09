import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CodingStats from './components/CodingStats';
import LinksPage from './components/LinksPage';
import Resume from './components/Resume';
import { motion, useScroll, useSpring } from "framer-motion";

const MainContent = () => (
  <>
    <Hero />
    <Skills />
    <Portfolio />
    <CodingStats />
    <Contact />
  </>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f]">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
