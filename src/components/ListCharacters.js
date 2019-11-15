import React, { useState, useEffect } from "react";
import axios from "axios";
import Accord from './Accord';

//bootstrap
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const Characters = props => {
  
  const [getFilm, setFilm] = useState([]);
    const style = {
      margin: "20px"
    };

    const cardStyle = {
      borderRadius: '2%'
    }

  return (
    <CardColumns style={style}>
      {props.getCharacter.map(character => (
        <Accordion  bg="dark" >
        <Card  className="text-left" bg="secondary" text="white" key={character.name} border="dark" style={cardStyle}>
          <Card.Header>Name: {character.name}</Card.Header>
          <Card.Body>
            <Card.Text>Height: {character.height}</Card.Text>
            <Card.Text>Gender: {character.gender}</Card.Text>
           
          </Card.Body>
            <Accord character={character}/>
        </Card>
        </Accordion>
      ))}
    </CardColumns>
  );
};

export default Characters;
