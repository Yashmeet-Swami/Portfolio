import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full h-auto bg-[var(--color-body)] text-[var(--color-lighttext)] px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
