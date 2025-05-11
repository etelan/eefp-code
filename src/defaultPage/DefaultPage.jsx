import React from "react";
import "./DefaultPage.css";
import BPPipelineVisualisation from "../bppipeline/BPPipelineVisualisation";

export default function DefaultPage({ children }) {
  return (
    <div className="page-container">
      <nav className="navbar">
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


          <a href="https://cryptpad.fr/form/#/2/form/view/cJ2tq7ViMIK8lNlguluZTI8iKQ1VbYGlwlVJmPxblqU/" className="button">
            Take Action!
          </a>

          <a href="/news" className="button">
            Read our news and updates
          </a>
      </div>
    </div>
  );
}