import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";

const ListFilms = props => {
  const style = {
    margin: "20px"
  };

  const imgStyle = {
    width: "100%",
    height: "20vw",
    objectFit: "cover"
  };

  return (
    <CardColumns style={style}>
      {props.getFilms.map(films => (
        <Card key={films.episode_id} border="secondary" className="text-left">
          <Card.Img
            variant="top"
            style={imgStyle}
            src={require(`../img/episode${films.episode_id}.jpeg`)}
          />
          <Card.Body>
            <Card.Text>Height: {films.title}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
};

export default ListFilms;
