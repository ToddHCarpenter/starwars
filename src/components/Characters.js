import React, { useState, useEffect } from "react";
import axios from "axios";
import ListCharacters from "./ListCharacters";
import Pagin from "./Pagin";
import LoadingSpinner from "./LoadingSpinner";

const Characters = () => {
  const [getCharacter, setCharacters] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/?page=1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(apiUrl);
      setCharacters(res.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl, isLoading]);
  console.log(getCharacter);

  const style = {
    margin: "0 auto",
    width: "90%"
  };

  const nextPage = page => {
    setApiUrl(`https://swapi.co/api/people/?page=${page}`);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div style={style}>
          <ListCharacters getCharacter={getCharacter} />
          <Pagin nextPage={nextPage} />
        </div>
      )}
    </div>
  );
};

export default Characters;
