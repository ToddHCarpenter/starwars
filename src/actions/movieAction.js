import axios from "axios"

export const GET_FILMS = 'GET_FILMS'

function getMovies() {
    const res = axios.get('https://swapi.co/api/films/');
    return dispatch => {
        res.then(({ data }) => {
            dispatch({ type: 'GET_FILMS', payload: data.results })
        })
    }
}


export default getMovies;