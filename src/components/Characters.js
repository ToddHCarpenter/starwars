import React, { useState, useEffect } from "react";
import axios from "axios";
import ListCharacters from "./ListCharacters";
import Pagin from './Pagin'

const Characters = () => {
  const [getCharacter, setCharacters] = useState([]);
  const [apiUrl, setApiUrl] = useState('https://swapi.co/api/people/?page=1')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(apiUrl);
      setCharacters(res.data.results);
    };

    fetchData();
  }, [apiUrl]);

  const nextPage = (page) => {
    setApiUrl(`https://swapi.co/api/people/?page=${page}`)
  };
  return (
    <div>
        <ListCharacters getCharacter={getCharacter} />
        <Pagin nextPage={nextPage} />
        </div>
  )
};

export default Characters;
