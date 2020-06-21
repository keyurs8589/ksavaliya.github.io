import React from "react";
import SectionHead from "./SectionHead";

const Education = ({ education }) => {
  return (
    <div id="Education">
      <SectionHead sectionHead="Education"></SectionHead>

      {education.map((edu) => (
        <div className="mb-3" key={edu.id}>
          <h3 className="mb-1">{edu.degree}</h3>
          <div className="subheading uni-color">{edu.university}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;
