import { SET_FAVORITE_MOVIE,REMOVE_FAVORITE_MOVIE} from './../actions/favorites';
const INITIAL_STAT = [];

export default function favoritesReducer(state = INITIAL_STAT, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_FAVORITE_MOVIE:
      return ([
        ...state,
        action.payload,
      ]);
    case REMOVE_FAVORITE_MOVIE:
      console.log(action.payload);
      return (
        [...state].filter(data => data.id !== action.payload.id));
      
    default:
      return state;
  }
}
