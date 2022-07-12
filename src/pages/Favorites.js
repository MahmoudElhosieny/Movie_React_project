import React from "react";
import FavoritesMovieCard from './../componants/favoritCard';
// import Card from "./../componants/Cards";
// import { useEffect, useState } from "react";
// import axiosInstance from "./../Network/axiosInstance";
import {useSelector } from 'react-redux';

function FavoritPages() {
  // let movieArry = [];
  const favoritList = useSelector((state) => state.Movie);
  // console.log(movieData1)
  // const [movieData2, setmovieData] = useState({});
  return (
    <>
      <h1> Favorit Page</h1>
      {
        favoritList.length !== 0 ?
          <div className=" row  p-5">
            {
              favoritList.map((movie) => {
                return (<div className="col-3" key={movie.id} >
                  <FavoritesMovieCard movie={movie} />
                </div>);
                
              })
            }
          </div>:<h4 className="mt-5 text-center"> Empty Favorite Movies List</h4>
      }
    
    </>
  );
  

   
};

export default FavoritPages;



 // return (
    //     <>
    //     <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
    //         {movieArry.map((movie) => {
    //           //   console.log(movie)
    //           return <Card key={movie.id} movie={movie} />;
    //         })}
    //       </div>
    //     </>
    // );

    // useEffect(() => {
  //   axiosInstance.get(`/movie/${movieData1[0]}}`)
  //   .then((res) => {setmovieData(res.data);})
  //   .catch((error)=>console.log(error))
  //    },[]);
  // console.log(movieData2)
  // movieArry.push(movieData2);
  // console.log(movieArry)