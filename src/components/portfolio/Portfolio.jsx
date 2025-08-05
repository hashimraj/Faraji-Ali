import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const projectData = [
  {
    id: 1,
    image: IMG1,
    title: "Twitter Clone",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "web",
  },
  {
    id: 2,
    image: IMG4,
    title: "Infographics in Figma",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "design",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma Dashboard UI Kit",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "web",
  },
  {
    id: 4,
    image: IMG5,
    title: "Maintaining Tasks App",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "design",
  },
  {
    id: 5,
    image: IMG2,
    title: "Crypto Currency Dashboard",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "web",
  },
  {
    id: 6,
    image: IMG6,
    title: "Financial Visualization Dashboard",
    github: "https://github.com",
    demo: "https://twitter-clone-2npx.onrender.com",
    category: "design",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="filter-buttons">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("web")}
          className={filter === "web" ? "active" : ""}
        >
          Web Apps
        </button>
        <button
          onClick={() => setFilter("mobile")}
          className={filter === "mobile" ? "active" : ""}
        >
          Mobile Apps
        </button>
        <button
          onClick={() => setFilter("design")}
          className={filter === "design" ? "active" : ""}
        >
          Design
        </button>
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio-detail">
                <h5>{title}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 19L19 5M19 5H9M19 5V15"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
