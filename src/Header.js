import React from "react";
import TextLoop from "react-text-loop";

//boostrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import bannerPath from "./img/StarWarsAllBlack.jpg";
const slogans = [
  "“The Force will be with you. Always.” — Obi-Wan Kenobi",
  "“You can’t stop the change, any more than you can stop the suns from setting.” — Shmi Skywalker",
  "“Hope is for the weak.” — Leia Organa",
  "“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda",
  "“WOW, my project is mediocre ” — Todd"
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
          style={style}
          src={bannerPath}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="http://localhost:3000/films">Movies</Nav.Link>
      </Nav>
      <Navbar.Text>
        <TextLoop
          children={slogans}
          springConfig={{ stiffness: 180, damping: 8 }}
          interval={7000}
        />
      </Navbar.Text>
    </Navbar>
  );
};
export default Header;
