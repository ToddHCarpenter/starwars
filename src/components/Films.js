import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFilms from "./ListFilms";

const Films = () => {
  const [getFilms, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://swapi.co/api/films/");
      setFilms(res.data.results);
    };

    fetchData();
  }, []);
  console.log(getFilms)
  return <ListFilms getFilms={getFilms} />;
};

export default Films;
