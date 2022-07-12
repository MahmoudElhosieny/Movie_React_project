import { GET_MOVIE_DATA } from "./../actions/movieData";
const INITIAL_STATE = {
  movieList: [],
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return {
        ...state,
        ...action.payload,
        movieList: action.payload.results
      };
    default:
      return state;
  }
}
