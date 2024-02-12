import React from "react";
import project from "../public/thumbnail-project-1-small.webp";
import Image from "next/image";
function Card() {
  return (
    <div className="projects">
      <Image src={project} alt="Project made in html and css"></Image>
      <h3>Design Portfolio</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <div className="links">
        <text>View Project</text>
        <text>View Code</text>
      </div>
    </div>
  );
}

export default Card;
