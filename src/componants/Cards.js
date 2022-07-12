import StarIcon from './starIcon';
import { useDispatch ,useSelector} from 'react-redux';
import { useState } from 'react'; 
import {setFavorite,removeFavorite } from './../store/actions/favorites'
export default function Card({ movie: { title, release_date, poster_path, overview, vote_average, original_title,id } }) {
    // console.log(release_date);
 
    const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1QPwfxCWuAFou0rU8tgCzYlOFqivW35pew&usqp=CAU';
  const posterImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const [favoriteMovie, setFavmovie] = useState(false);
  function changeMoviIcon() {
    setFavmovie(favoriteMovie ? false : true);
  };
  // const favoritList = useSelector((state) => state.Movie);
  const dispatch = useDispatch();
  const addFavortMovie = () => {
    dispatch(setFavorite({
      id: id,
      title: title,
      overview: overview,
      poster_path: poster_path,
    }));
  };
  const removeFavortMovie = () => {
    dispatch(removeFavorite({
      id: id,
      title: title,
      overview: overview,
      poster_path: poster_path,
    }));
};
  return (
      <>
          <div className="col">
              <div className="card" >
                  <img src={  posterImg ? posterImg : imgUrl} className="card-img-top" alt={title} title={title}  />
        <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text"> Release Date: {release_date }</p>
                      <p className="card-text"> {overview} </p>
            <h6 className="card-title text-danger"> Avrage Vote: {vote_average}</h6>
            {favoriteMovie ?
              <StarIcon color={'text-warning '} id={id} function={() => { changeMoviIcon(); removeFavortMovie(); }} />
              : <StarIcon color={'text-black-50 '} id={id} function={() => { changeMoviIcon(); addFavortMovie(); }} />
           } 
        </div>
      </div>
          </div>
     
    </>
  );
}


 // eslint-disable-next-line no-lone-blocks
 {/* //{`https://image.tmdb.org/t/p/w500/${poster_path}` ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ${imgUrl} `} */}
