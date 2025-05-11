import React from "react";
import DefaultPage from "../defaultPage/DefaultPage";

export default function TheProblem() {
  return (
    <DefaultPage>
      <h1 className="main-heading">
        British Museum: Drop BP Now!
      </h1>

      <p className="description">
        The British Museum must sever all ties with BP, including ending the £50m sponsorship deal and any other sub-contracts. This is a critical step toward aligning with ethical and sustainable practices.
      </p>

      <p className="description">
        We call for the establishment of a democratic, staff-led decision-making body to oversee future funding opportunities and public-private partnerships. This ensures transparency and accountability in all financial dealings.
      </p>

      <p className="description">
        The BP Lecture Theatre must be renamed to reflect the museum's commitment to distancing itself from fossil fuel sponsorships. This symbolic act is essential for rebuilding public trust.
      </p>

      <p className="description">
        Finally, the museum must issue a public statement committing to rejecting funding from fossil fuel and arms industries. This declaration will solidify its stance as a leader in ethical cultural stewardship.
      </p>

      <div className="button-container">
        <a href="https://opencollective.com/energy-embargo" className="button">
          Donate to support us
        </a>
        <a href="mailto:info@energyembargoforpalestine.com" className="button">
          Contact us
        </a>
        <a href="/news" className="button">
          Read our news and updates
        </a>
      </div>
    </DefaultPage>
  );
}