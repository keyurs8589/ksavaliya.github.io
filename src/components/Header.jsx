import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style/header.css";
import profile from "../img/profile.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="sidebar">
        <Navbar.Brand href="#home" className="d-block d-lg-none">
          Keyur Savaliya
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="d-lg-block d-none">
          <img className="rounded-circle img-profile" src={profile} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#TechnicalSkill">Technical Skill</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
