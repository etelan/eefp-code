import React from "react";
import "./Homepage.css";
import { useMediaQuery } from "react-responsive";
import BPPipelineVisualisation from "../bppipeline/BPPipelineVisualisation";
import DefaultPage from "../defaultPage/DefaultPage";

export default function HomePage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <DefaultPage>
        <p className="description">
          Energy Embargo for Palestine is a British-based anti-imperialist
          climate organisation fighting for a energy embargo from below.
        </p>

        <p className="description">
          In the wake of Israel's genocide in Gaza, Palestinian groups issued a
          call to disrupt energy flow to Israel and the global energy market. In
          Britain, where many energy companies fuelling Israel's genocide are
          based, we view it as our responsibility to isolate Zionism by
          targeting its lifesource.
        </p>

        {isDesktop && <BPPipelineVisualisation />}

        <p className="description">
          We have organised mass mobilisations targeting institutional
          partnerships with BP, intervened at BP stakeholder events, published
          critical research on BP's supply of oil to Israel, and launched our
          "Stop Fuelling Genocide" campaign to mobilise workers and activists
          internationally against Turkey's oil supply to Israel.
        </p>
    </DefaultPage>
  );
}
