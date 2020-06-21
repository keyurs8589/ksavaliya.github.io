import React from "react";
import SectionHead from "./SectionHead";

import SingleExp from "./SingleExp";

const Experience = ({ experience }) => {
  return (
    <div id="Experience">
      <SectionHead sectionHead="Experience"></SectionHead>
      {experience.map((exp) => (
        <SingleExp key={exp.id} exp={exp} />
      ))}
    </div>
  );
};

export default Experience;
