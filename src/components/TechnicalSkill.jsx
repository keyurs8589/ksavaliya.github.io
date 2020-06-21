import React from "react";
import SectionHead from "./SectionHead";
import { Image } from "react-bootstrap";

const TechnicalSkill = ({ technicalSkill }) => {
  return (
    <div id="TechnicalSkill">
      <SectionHead sectionHead="Technical Skills"></SectionHead>
      <div className="tech-set">
        {technicalSkill.map((tech) => (
          <div className="tech-one mb-3" key={tech.id}>
            <Image className="tech-size mb-2" src={tech.imageUrl} />
            <div className="tech-name">{tech.imageName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkill;
