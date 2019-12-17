import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";

import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ListFilmsBack = (props) => {


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
                        <BackSide {...films.episode_id === films.episode_id}>
                            <Card.Header className='text-secondary'>{films.title}</Card.Header>
                            <Card.Body className='text-secondary' >{films.opening_crawl}</Card.Body>
                            <Card.Footer>
                                <Button onClick={props.handleClick} variant="link">Link</Button>
                            </Card.Footer>
                        </BackSide>
                    </Card>

                ))}

        </div>
    );
};

export default ListFilmsBack;