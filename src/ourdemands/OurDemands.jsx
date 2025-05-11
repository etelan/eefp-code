import React from "react";
import BPPipelineVisualisation from "../bppipeline/BPPipelineVisualisation";
import DefaultPage from "../defaultPage/DefaultPage";
import "./OurDemands.css"; // Assuming you have a CSS file for custom styles

export default function OurDemands() {
  return (
    <DefaultPage>
      <div className="our-demands-container">
        <h1 className="main-heading">
          Our <span className="highlight">Demands</span>
        </h1>

        <ul className="demands-list">
          <li>
            <strong>1. DROP BP:</strong> Sever all ties to BP including an end to the £50m sponsorship deal and any other sub-contracts.
          </li>
          <li>
            <strong>2.</strong> Set up a democratic staff-led decision-making body for future funding opportunities and public-private partnerships.
          </li>
          <li>
            <strong>3.</strong> Rename the BP Lecture Theatre.
          </li>
          <li>
            <strong>4.</strong> Issue a public statement committing to no more fossil fuels or arms industry funding.
          </li>
        </ul>

        <div className="button-container">
          <a href="https://opencollective.com/energy-embargo" className="button primary-button">
            Donate to Support Us
          </a>
          <a href="mailto:info@energyembargoforpalestine.com" className="button secondary-button">
            Contact Us
          </a>
          <a href="/news" className="button secondary-button">
            Read Our News and Updates
          </a>
        </div>
      </div>
    </DefaultPage>
  );
}