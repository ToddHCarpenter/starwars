import { GET_FILMS } from '../actions/movieAction';

const movieReducer = (state = { movieList: [] }, action) => {
    console.log(action.payload)
    switch (action.type) {
        case GET_FILMS:
            return {
                movieList: action.payload
            };
        default:
            return state
    }
}

export default movieReducer;