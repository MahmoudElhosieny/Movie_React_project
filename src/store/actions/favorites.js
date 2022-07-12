export const SET_FAVORITE_MOVIE = "SET_FAVORITE_MOVIE";
export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE_MOVIE,
    payload,
  };
};

export const removeFavorite = (payload) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload,
  };
};
