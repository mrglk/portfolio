import "./PortfolioList.scss";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
// import { useEffect, useState } from "react";
import { projects } from "./projects";

export function PortfolioList() {
  return (
    <div className="container portfolio">
      <div className="container__row">
        <h2 className="portfolio__head">Портфолио</h2>
        {projects.map((project) => (
          <PortfolioItem
            key={project.name}
            alt={project.name}
            src={project.image}
            name={project.name}
            stack={project.stack}
            demo={project.demo}
            repo={project.repo}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
