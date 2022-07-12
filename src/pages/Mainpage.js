import React from "react";
import { useEffect, useState,useContext } from "react";
import { useSelector,useDispatch } from "react-redux"; 
import Card from "./../componants/Cards";
// import axiosInstance from "./../Network/axiosInstance";
import Button from './../componants/Button';
import LoadingSpaner from './../componants/LoadingSpaner';
import { getMoviesData } from "./../store/actions/movieData";
import LanguageContext from '../context/langaugeContext';



function Main() {
  // const [movieData, setMovieData] = useState([]);
  const [pageData, setpageData] = useState(1);
  const {contextLang,setContextLang} = useContext(LanguageContext);
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const movieList = useSelector((state)=>state.Moviesdata.movieList);

  useEffect(() => {
    dispatch(getMoviesData(pageData,contextLang));
    setisLoading(false);
  }, [pageData, contextLang, dispatch]);
  // console.log(movieList);
  
  const Previse = () => {
    console.log("previ");
    if (pageData > 1) {
      setpageData(pageData - 1);
    } else {
      setpageData(pageData);
    }
  };
  const Next = () => {
    console.log("next");
    setpageData(pageData + 1);
  };

  return (
    <>
      {isLoading ? (<LoadingSpaner/>) : (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
            {movieList.map((movie) => {
                // console.log(movie)
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
          <div className="row col-12 border m-auto p-3">
            {pageData === 1 ? (
              <button
                className="btn btn-success col-2 "
                disabled
                onClick={() => Previse()}
              >
                Previse Page
              </button>
            ) : (
            <Button name={'Previse Page'} function={() => Previse()} color={ "btn-success"} offset={'offset-0'}/>
            )}
            <Button name={'Next Page'} function={() => Next()} color={"btn-danger"} offset={'offset-8'}/>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;



// import Navebar from "./componants/NaveBar";
//https://api.themoviedb.org/3/movie/popular?api_key=2d896cea1324879a1fcee9cdb081a484
//https://api.themoviedb.org/3/movie/popular?api_key=2d896cea1324879a1fcee9cdb081a484&page=4
//https://api.themoviedb.org/3/movie/880009?api_key=2d896cea1324879a1fcee9cdb081a484

//https://api.themoviedb.org/3/movie/popular?api_key=2d896cea1324879a1fcee9cdb081a484&page=1&language=ar

// useEffect(() => {
  //   axiosInstance
  //     .get("/movie/popular", {
  //       params: {
  //         page: pageData,
  //       },
  //       headers: {},
  //     })
  //     .then((res) => {
  //       setMovieData(res.data.results);
  //       setisLoading(true);
  //     })
  //     .catch((error) => setisLoading(false));
  // }, [pageData]);
  // console.log(movieData);