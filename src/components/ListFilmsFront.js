import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ListFilmsFront = (props) => {


    const style = {
        margin: "20px",
        borderRadius: '2%'
    };

    const imgStyle = {
        width: "100%",
        height: "20vw",
        objectFit: "cover"
    };



    return (
        <div>

            {
                props.film.map(films => (

                    <Card key={films.episode_id} bg='light' variant="light" border="secondary" className="shadow p-3 mb-5 bg-white rounded text-left">
                        <FrontSide {...films.episode_id === films.episode_id}>
                            <Card.Header className='text-secondary'>{films.title}</Card.Header>
                            <Card.Img
                                variant="top"
                                style={imgStyle}
                                src={require(`../img/episode${films.episode_id}.jpeg`)}
                            />
                            <Card.Footer>
                                <Button onClick={props.handleClick} variant="link">Link</Button>
                            </Card.Footer>
                        </FrontSide>
                    </Card>

                ))}

        </div>
    );
};

export default ListFilmsFront;