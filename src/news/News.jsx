import React from "react";
import DefaultPage from "../defaultPage/DefaultPage";
import "./News.css";

function NewsTile({ title, description, url, image, date }) {
  return (
    <a href={url} className="news-tile" aria-label={title} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="news-image" />
      {date && <p className="news-date">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
      <h2 className="news-title">{title}</h2>
      <p className="news-description">{description}</p>
    </a>
  );
}

export default function News() {
  const newsItems = [
    {
      date: "2 May2024.",
      title: "Our research with Shado Mag",
      description: "Pipeline to Genocide: BP's Oil Route to 'Israel'",
      url: "https://shado-mag.com/bp-oil-pipeline-israel-palestine-genocide-investigation/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/HDPE_Pipeline_in_a_harsh_Australian_environment.jpg/2560px-HDPE_Pipeline_in_a_harsh_Australian_environment.jpg",
    },
    {
      date: " 28 November 2024",
      title: "Middle East Eye coverage of our research",
      description:
        "New evidence reveals oil shipments from Turkey to 'Israel' continue despite embargo",
      url: "https://www.middleeasteye.net/news/new-evidence-reveals-oil-shipments-turkey-israel-continue-despite-embargo",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Supertanker_AbQaiq.jpg",
    },
    {
      date: "9 November 2024",
      title: "Interview with New Socialist",
      description: "Ahead of Monday's global day of action against BP and the Turkish state, New Socialist interviewed Energy Embargo for Palestine about the group, their vision, and their strategy.",
      url: "https://newsocialist.org.uk/interview-with-energy-embargo-for-palestine/",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Secretary_Pompeo_briefs_the_traveling_press_%2842895283735%29.jpg", 
    },
    {
      date: "15 September 2024",
      title: "Our podcast with Shado Mag",
      description: "How is our energy system intertwined with the Israeli occupation of Palestine? Mariam and Felix, members of Energy Embargo for Palestine—an anti-imperialist climate collective—join us to explain how the fossil fuel industry sustains the Zionist project.",
      url: "https://open.spotify.com/episode/1LMiA9ZTIMQ8LcRr0xSrmL",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Hermes_Oma%C3%B1a.jpg", 
    },
    {
      date: "10 September 2024",
      title: "Interview with Atmos",
      description: "Activists accuse BP of being complicit in genocide for selling oil to 'Israel', and they’re calling for an energy embargo to end the crisis in Gaza.",
      url: "https://atmos.earth/israels-war-machine-needs-oil-should-the-world-cut-it-off/",
      image: "https://atmos.earth/wp-content/uploads/2024/10/energy-embargo-israel-hero-1920x1535.jpg", 
    },
    {
      date: "18 April 2024",
      title: "Interview with RS21",
      description: "On 11 February, Energy Embargo for Palestine (EEfP) launched the #BoycottBritishMuseum campaign by occupying the museum in protest of its BP deal, linking climate and Palestine solidarity movements.",
      url: "https://revsoc21.uk/2024/04/18/interview-with-energy-embargo-for-palestine/",
      image: "https://upload.wikimedia.org/wikipedia/en/d/db/Revolutionary_Socialism_in_the_21st_Century_%28rs21%29_logo.png", 
    },
    {
      date: "29 March 2024",
      title:"Us for Shado Mag",
      description: "How the British Museum’s partnership with BP has shown the world its allegiance to imperialism at any cost",
      url: "https://shado-mag.com/act/how-the-british-museums-partnership-with-bp-has-shown-the-world-its-allegiance-to-imperialism-at-any-cost/",
      image: "https://shado-mag.com/wp-content/uploads/2024/03/24.03.2024_Andrea-Domeniconi_NZ6_2293-scaled.jpeg", 
    },
    {
      date: "15 February 2024",
      title: "Why We Occupied the British Museum | Jacobin",
      description: "On Sunday, activists occupied the British Museum to demand that it end its partnership with BP after 'Israel' granted the energy firm gas exploration licenses off the coast of Gaza. Here, the activists write about why they occupied the museum.",
      url: "https://jacobin.com/2024/02/british-museum-israel-bp-gaza",
      image: "https://images.jacobinmag.com/wp-content/uploads/2024/02/15090917/GettyImages-929369312.jpg", 
    },
  ];

  const sortedNewsItems = newsItems
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <DefaultPage>
      <section>
        <h1 className="main-heading">News and Updates</h1>
        <div className="news-grid">
          {sortedNewsItems.map((item, index) => (
            <NewsTile
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
              image={item.image}
              date={item.date}
            />
          ))}
        </div>
      </section>
    </DefaultPage>
  );
}