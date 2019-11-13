import React from "react";
import TextLoop from "react-text-loop";

//boostrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import bannerPath from "./img/StarWarsAllBlack.jpg";

const slogans = [
  "“The Force will be with you. Always.” — Obi-Wan Kenobi",
  "“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda",
  "“WOW, my project is mediocre ” — Todd", "“Nice ” — Owen"
];
const Header = () => {
  const style = {
    width: "90px",
    height: "40px",
    margin: "10px"
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="http://localhost:3000/">
        <img
        alt=""
          style={style}
          src={bannerPath}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="http://localhost:3000/characters">Characters</Nav.Link>
      </Nav>
      <Navbar.Text>
        <TextLoop
          children={slogans}
          springConfig={{ stiffness: 180, damping: 8 }}
          interval={5000}
        />
      </Navbar.Text>
    </Navbar>
  );
};
export default Header;
