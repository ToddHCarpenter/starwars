import React, { useEffect } from "react";
import ListFilms from "./ListFilms";

import { useDispatch } from 'react-redux';
import getMovies from "../actions/movieAction";


const Films = () => {

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getMovies())
    console.log('hello')
  }, [])

  const style = {
    margin: '0 auto',
    width: '78%',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={style}>
      <ListFilms />
    </div>)
};

export default Films;
