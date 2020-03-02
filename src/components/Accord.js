import React, { useState, useEffect } from "react";
import axios from "axios";

//bootstrap
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";

const Accord = props => {
  const [getFilms, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, [getFilms]);

  const getFilm = () => {
    setFilms([]);
    props.character.films.map(film => {
      console.log(film);
      const fetchData = async () => {
        const res = await axios(film);
        //for (var i= 0; i < res.data.length; i++){
        setFilms(getFilms => [...getFilms, res.data.title]);
        setIsLoading(false);
      };
      return fetchData();
    });
    console.log(getFilms);
  };

  const linkStyle = {
    color: "#fff"
  };
  return (
    <div>
      <Card.Footer>
        <Accordion.Toggle
          className="text-secondary"
          as={Button}
          variant="link"
          onClick={getFilm}
          style={linkStyle}
          eventKey="0"
        >
          Movies
        </Accordion.Toggle>
        <Button
          variant="light"
          className="float-right text-secondary"
          size="sm"
          onClick={() => props.save(props.character)}
        >
          Save
        </Button>
      </Card.Footer>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <div>
            <ul>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                getFilms.map(films => (
                  <li className="text-secondary">{films}</li>
                ))
              )}
            </ul>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </div>
  );
};

export default Accord;
