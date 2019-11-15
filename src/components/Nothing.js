import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFilms from "./ListFilms";

const Nothing = (props) => {

  console.log(props.getfilm);

  return  (
    <ul>
        {props.movie && props.movie.map(film => (
            <li>{film.title}</li>
        ))}
    </ul>
  )
}

export default Nothing;