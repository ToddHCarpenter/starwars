import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';


const ListFilms = () => {


  const style = {
    margin: "10px",
    borderRadius: '2%',
    width: '20rem',
    flexGrow: '1'
  };

  const imgStyle = {
    width: "100%",
    height: "20vw",
    objectFit: "cover"
  };

  const film = useSelector(state => state.movies.movieList);

  film.sort((a, b) => a.episode_id - b.episode_id);

  return (
    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'end' }}>
      {
        film.map(films => (
          <Accordion >
            <Card key={films.episode_id} bg='light' variant="light" border="secondary" style={style} className="shadow p-3 mb-5 bg-white rounded text-left">
              <Card.Header className='text-secondary'>{films.title}</Card.Header>
              <Card.Img
                variant="top"
                style={imgStyle}
                src={require(`../img/episode${films.episode_id}.jpeg`)}
              />
              <Card.Footer>
                <Accordion.Toggle as={Button} variant="link" eventKey='0' className='text-secondary' >Opening Crawl</Accordion.Toggle>
              </Card.Footer>
              <Accordion.Collapse eventKey="0">
                <Card.Body className='text-secondary' >{films.opening_crawl}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
    </div>
  );
};

export default ListFilms;
