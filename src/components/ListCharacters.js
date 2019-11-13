import React, { useState, useEffect } from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";

const Characters = props => {
  return (
    <CardColumns>
      {props.getCharacter.map(character => (
        <Card key={character.name} border="secondary" className="text-left">
          <Card.Header>Name: {character.name}</Card.Header>
          <Card.Body>
            <Card.Text>Height: {character.height}</Card.Text>
            <Card.Text>Gender: {character.gender}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
};

export default Characters;
