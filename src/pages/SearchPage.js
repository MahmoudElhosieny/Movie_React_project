import React from "react";
import { useEffect, useState } from "react";
import Card from "./../componants/Cards";
import axiosInstance from "./../Network/axiosInstance";
import LoadingSpaner from './../componants/LoadingSpaner';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const [movieData, setMovieData] = useState([]);
  const [movieName, setMoviename] = useState("memory");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    axiosInstance
      .get("/search/movie", {
        params: {
          query: movieName,
        },
        headers: {},
      })
      .then((res) => {
        setMovieData(res.data.results);
        setisLoading(false);
      })
      .catch((error) => setisLoading(false));
  }, [movieName]);
  const handelChange = (e) => {
    console.log(e.target.value);
    setMoviename(e.target.value);
  }; //
  return (
    <>
     
      <input
        className="form-control me-2 my-4"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          handelChange(e);
        }}
      />
      {isLoading ? (<LoadingSpaner/>) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
          {movieData.map((movie) => {
            //   console.log(movie)
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
}
