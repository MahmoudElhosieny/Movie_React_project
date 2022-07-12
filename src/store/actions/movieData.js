import axiosInstance from "./../../Network/axiosInstance";
 const GET_MOVIE_DATA = "GET_MOVIE_DATA";

 const getMoviesData = (currentPage, contextLang) => (dispatch) => {
  axiosInstance
    .get("/movie/popular", {
      params: {
        page: currentPage,
        language: contextLang,
      },
    })
    .then((res) =>
      dispatch({
        type: GET_MOVIE_DATA,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};
export { getMoviesData, GET_MOVIE_DATA };
// const getMovidata = (currentPage,contextLang) => (dispatch) => {
//   return  axiosInstance
//     .get("/movie/popular", {
//       params: {},
//       headers: {},
//     })
//     .then((res) => {
//       dispatch({
//           type: GET_MOVIE_DATA,
//           payload: res.data
//       })
//     })
//     .catch((error) => console.log(error));

// };
