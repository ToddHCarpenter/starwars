import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFavorites from './ListFavorites'


const Favorites = () => {
    const [favorites, setFavorite] = useState([])

    useEffect(() => {
        axios.get('/favorites')
            .then(({ data }) => {
                setFavorite(data);
            })
    }, [])

    const deleteFavorite = (character_id) => {
        axios.get(`/delete/${character_id}`)
            .then(setFavorite(favorites.filter(favorite => favorite.character_id !== character_id)))
    }

    return (
        <div >
            <ListFavorites favorites={favorites} deleteFavorite={deleteFavorite} />
        </div>
    )
};

export default Favorites;