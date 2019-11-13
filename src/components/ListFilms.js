import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const ListFilms = props => {
  const style = {
    margin: "20px"
  };

  const imgStyle = {
    width: "100%",
    height: "20vw",
    objectFit: "cover"
  };

  const cardStyle = {
    borderRadius: '2%'
  }

  const linkStyle = {
    color: '#fff'
  }

  return (
    <CardColumns style={style}>
      {props.getFilms.map(films => (
        <Accordion >
        <Card key={films.episode_id} border="secondary" className="text-left" bg="secondary" text="white" style={cardStyle}> 
          <Card.Img
            variant="top"
            style={imgStyle}
            src={require(`../img/episode${films.episode_id}.jpeg`)}
          />
          <Card.Body>
            <Card.Text>Title: {films.title}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Accordion.Toggle as={Button} variant="link" style={linkStyle} eventKey='0' >Opening Crawl</Accordion.Toggle>  
          </Card.Footer>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{films.opening_crawl}</Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
      ))}
    </CardColumns>
  );
};

export default ListFilms;
