import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/mainContext.css";
import About from "./About";
import Experience from "./Experience";
import TechnicalSkill from "./TechnicalSkill";
import Education from "./Education";
import axios from "axios";

const MainContext = () => {
  const [experience, setExperience] = useState([]);
  const [technicalSkill, setTechnicalSkill] = useState([]);
  const [education, setEducation] = useState([]);
  useEffect(() => {
    axios
      .get("resumeData.json")
      .then((res) => {
        setExperience(res.data.experience);
        setTechnicalSkill(res.data.technicalSkills);
        setEducation(res.data.education);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="main-context">
          <About />
        </Col>
      </Row>
      <Row>
        <Col className="main-context">
          <Experience experience={experience} />
        </Col>
      </Row>
      <Row>
        <Col className="main-context">
          <TechnicalSkill technicalSkill={technicalSkill} />
        </Col>
      </Row>
      <Row>
        <Col className="main-context">
          <Education education={education} />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContext;
