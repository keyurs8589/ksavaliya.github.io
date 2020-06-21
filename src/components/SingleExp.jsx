import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import caret from "../img/triangle.svg";

const SingleExp = ({ exp }) => {
  const [dutyFlag, setDutyFlag] = useState(false);
  const dutyShowHandler = () => {
    setDutyFlag(!dutyFlag);
  };
  useEffect(() => {
    exp.id === "1" && setDutyFlag(true);
  }, [exp.id]);

  return (
    <div className="mb-4">
      <div className="mr-auto">
        <div className="clickable-header" onClick={dutyShowHandler}>
          <h3 className="mr-2 mb-0">{exp.designation}</h3>
          <Image
            className={dutyFlag ? "caret-size" : "caret-size caret-close"}
            src={caret}
          />
        </div>
        <div className="subheading mb-3">
          <a
            className="mr-2 text-primary"
            href="https://www.letsnurture.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {exp.companyName}
          </a>
          <span>{exp.duration}</span>
        </div>
        {dutyFlag ? (
          <div>
            <ul>
              {exp.duty.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div>
        <div className="subheading">Tech Stack</div>
        {exp.techStack.map((tech) => (
          <div className="sub-desc" key={tech}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleExp;
