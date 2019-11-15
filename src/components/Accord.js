import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import Nothing from './Nothing'

//bootstrap
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { get } from "https";


const Accord = (props) => {

    const [getFilms, setFilms] = useState([]);

    const [movie, setMovie] = ([]);

      useEffect(() => {
         
      }, [getFilms])


    const getFilm = () => {
    props.character.films.map(film => {
        console.log(film)
        const fetchData = async () => {
            
            const res = await axios(film);
            //for (var i= 0; i < res.data.length; i++){
            setFilms(getFilms => [...getFilms, res.data.title]); 
            //     
        }
        fetchData();        
    });
    console.log(getFilms)
    }


    console.log(getFilms)
   
    const List = () => {        
             
        return (          
            <div>           
                <ul>   
                {getFilms.map(films => (   
                    <li>                  
                        {films}
                    </li>
                    ))} 
                </ul>                 
            </div>
        )
    }


   
    const linkStyle = {
        color: '#fff'
      }
    return (
        <div>
            <Card.Footer>
                <Accordion.Toggle as={Button} variant="link" onClick={getFilm}   style={linkStyle} eventKey='0' >More Info</Accordion.Toggle>  
            </Card.Footer>
        <Accordion.Collapse eventKey="0">
        
            <Card.Body> 
                {/* <div>
                    <ul>
                        {console.log(getFilms)}
                     { 
                     getFilms && getFilms.map((film,index) => (
                     <li key={index} >{film.title} </li>
                     ))}
                    </ul>
                    
                </div>          */}
                <List />
            </Card.Body>
            
        </Accordion.Collapse>

        </div>
  );
};

export default Accord;