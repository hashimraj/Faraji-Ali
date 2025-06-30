import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Twitter Clone",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts Templates & Infographics in Figma",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma Dashboard UI Kit for Data Design Web Apps",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
  {
    id: 4,
    image: IMG1,
    title: "Maintaining Tasks and Tracking Progress",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
  {
    id: 6,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Visit App 
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
