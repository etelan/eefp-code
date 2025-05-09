import React from "react";
import "./Homepage.css";
import BPPipelineVisualisation from "../bppipeline/BPPipelineVisualisation";

export default function HomePage() {
  return (
    <div className="page-container">
      <nav className="navbar">
        {[
          "Home",
          "About us",
          "Our actions",
          "Campaigns",
          "Get involved",
          "News",
          "Donate",
          "Contact",
        ].map((item) => (
          <a key={item} href="#" className="nav-link">
            {item}
          </a>
        ))}
      </nav>

      <main className="main-content">
        <h1 className="main-heading">
          Energy Embargo <br /> for Palestine
        </h1>

        <img
          src="/workers-logo.png"
          alt="Energy Embargo for Palestine Logo"
          className="main-logo"
        />

        <p className="description">
          Energy Embargo for Palestine is a British-based anti-imperialist
          climate organisation fighting for a energy embargo from below.
        </p>

        <BPPipelineVisualisation/>

        <p className="description">
          In the wake of Israel's genocide in Gaza, Palestinian groups issued a
          call to disrupt energy flow to Israel and the global energy market. In
          Britain, where many energy companies fuelling Israel's genocide are
          based, we view it as our responsibility to isolate Zionism by
          targeting its lifesource.
        </p>

        <p className="description">
          We have organised mass mobilisations targeting institutional
          partnerships with BP, intervened at BP stakeholder events, published
          critical research on BP's supply of oil to Israel, and launched our
          "Stop Fuelling Genocide" campaign to mobilise workers and activists
          internationally against Turkey's oil supply to Israel.
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
      </main>
    </div>
  );
}
