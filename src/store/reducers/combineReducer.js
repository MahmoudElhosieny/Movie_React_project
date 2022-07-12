import { combineReducers } from "redux";
import favoritesReducer from "./favoriReducer";
import movieReducer from "./movieReducer";
// import moviepageReducer from "./movipageReducer";

export default combineReducers({
  Movie: favoritesReducer,
  Moviesdata: movieReducer,
  
});
