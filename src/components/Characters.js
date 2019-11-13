import React, { useState, useEffect } from "react";
import axios from "axios";
import ListCharacters from "./ListCharacters";

const Characters = () => {
  const [getCharacter, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://swapi.co/api/people");
      setCharacters(res.data.results);
    };

    fetchData();
  }, []);

  return <ListCharacters getCharacter={getCharacter} />;
};

export default Characters;
