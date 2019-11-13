import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const Characters = props => {


  
    const style = {
      margin: "20px"
    };

    const cardStyle = {
      borderRadius: '2%'
    }

    const linkStyle = {
      color: '#fff'
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
          <Card.Footer>
            <Accordion.Toggle as={Button} variant="link" style={linkStyle} eventKey='0' >More Info</Accordion.Toggle>  
          </Card.Footer>
           <Accordion.Collapse eventKey="0">
             <Card.Body>
            <Card.Text>Birth Year: {character.birth_year}</Card.Text>
            <Card.Text>Eye Color: {character.height}</Card.Text>
            <Card.Text>Hair Color: {character.hair_color}</Card.Text>
            <Card.Text>Skin Color: {character.skin_color}</Card.Text>
            </Card.Body>
           </Accordion.Collapse>
        </Card>
        </Accordion>
      ))}
    </CardColumns>
  );
};

export default Characters;
