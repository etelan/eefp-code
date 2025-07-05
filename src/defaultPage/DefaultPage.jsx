import React, { useState } from "react";
import "./DefaultPage.css";
import BPPipelineVisualisation from "../bppipeline/BPPipelineVisualisation";

export default function DefaultPage({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="page-container">
      <button className="toggle-button" onClick={toggleDropdown}>
        ☰ {/* Hamburger menu icon */}
      </button>

      <nav className={`navbar`}>
        
        <div className={`nav-links ${isDropdownOpen ? "active" : ""}`}>
          {[
            { label: "Home", url: "/" },
            { label: "Our Demands", url: "/#/our-demands" },
            { label: "The Problem", url: "/#/the-problem" },
            { label: "The Journey So Far", url: "/#/the-journey-so-far" },
            { label: "News", url: "/#/news" },
            { label: "Donate", url: "https://opencollective.com/energy-embargo" },
          ].map((item) => (
            <a key={item.label} href={item.url} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Social Navbar */}
      <nav className="social-navbar">
        <a href="mailto:info@energyembargoforpalestine.com" className="social-link">
          Email
        </a>
        <a href="https://instagram.com/energyembargoforpalestine" className="social-link">
          Instagram
        </a>
        <a href="https://twitter.com/eeforpalestine" className="social-link">
          X/Twitter
        </a>
      </nav>

      <img
        src="/eefg-logo-with-text.png"
        alt="Example"
        className="centered-image"
      />
      <main className="main-content">
        {children}
      </main>

      <div className="button-container">
          <a href="https://opencollective.com/energy-embargo" className="button">
            Donate to support us
          </a>

          <a href="https://bit.ly/JoinEEFP" className="button">
            Take Action!
          </a>

          <a href="/#/news" className="button">
            Read our news and updates
          </a>
      </div>
    </div>
  );
}