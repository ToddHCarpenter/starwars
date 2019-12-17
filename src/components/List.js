import React, { useState } from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import ListFilmsFront from './ListFilmsFront'
import ListFilmsBack from './ListFilmBack'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const List = () => {

    const [isFlipped, setIsFlipped] = useState(false)


    const style = {
        margin: "20px",
        borderRadius: '2%'
    };

    const imgStyle = {
        width: "100%",
        height: "20vw",
        objectFit: "cover"
    };

    const film = useSelector(state => state.movies.movieList);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(prevState => (console.log(prevState),
            { isFlipped: !prevState.isFlipped }));

    };



    film.sort((a, b) => a.episode_id - b.episode_id);

    return (
        // <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        //     <ListFilmsFront film={film} handleClick={handleClick} />
        //     <ListFilmsBack film={film} handleClick={handleClick} />
        // </ReactCardFlip>


        <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"  >

            <ListFilmsFront film={film} />


            <ListFilmsBack film={film} />

        </Flippy>



    );

}

export default List;