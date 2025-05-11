import React from "react";
import DefaultPage from "../defaultPage/DefaultPage";

export default function TheProblem() {
  return (
    <DefaultPage>
        <h1 className="main-heading">
          British Museum <br/>Drop BP Now! 
        </h1>

        <p className="description">
          1. DROP BP: Sever all ties to BP including an end to the £50m sponsorship deal and any other sub-contracts.

2. Set up a democratic staff-led decision-making body for future funding opportunities and public-private partnerships.

3. Rename the BP Lecture Theatre.

4. Issue a public statement committing to no more fossil fuels or arms industry funding.
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
