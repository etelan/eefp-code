import React from "react";
import DefaultPage from "../defaultPage/DefaultPage";
import "./OurDemands.css"; // Import the CSS file for styling

export default function OurDemands() {
  return (
    <DefaultPage>
      <section className="the-problem">
        <header className="the-problem-header">
          <h1 className="main-heading">
            British Museum <br /> Drop BP Now!
          </h1>
        </header>

        <article className="the-problem-content">
          <ol className="problem-list">
            <li className="problem-item">
              <span className="problem-icon">💔</span>
              <strong>Sever all ties to BP,</strong> including an end to the <span className="highlight">£50m sponsorship deal</span> and any other sub-contracts.
            </li>
            <li className="problem-item">
              <span className="problem-icon">🤝</span>
              Set up a <span className="highlight">democratic staff-led decision-making body</span> for future funding opportunities and public-private partnerships.
            </li>
            <li className="problem-item">
              <span className="problem-icon">🏛️</span>
              <strong>Rename </strong> the <span className="highlight">BP Lecture Theatre</span>
            </li>
            <li className="problem-item">
              <span className="problem-icon">🌍</span>
              <strong>Issue a statement</strong> committing to <span className="highlight">no more fossil fuels</span> or arms industry funding.
            </li>
          </ol>
        </article>

        <footer className="the-problem-footer">
          <div className="button-container">
            <a
              href="https://opencollective.com/energy-embargo"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to support us
            </a>
            <a
              href="mailto:info@energyembargoforpalestine.com"
              className="button"
            >
              Contact us
            </a>
            <a href="/news" className="button">
              Read our news and updates
            </a>
          </div>
        </footer>
      </section>
    </DefaultPage>
  );
}