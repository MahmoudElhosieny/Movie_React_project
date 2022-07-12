// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavorite } from './../store/actions/favorites';
import StarIcon from "./starIcon";

export default function FavoritMoviecard({ movie: { title, release_date, poster_path, overview, vote_average, original_title,id } }) {
    const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1QPwfxCWuAFou0rU8tgCzYlOFqivW35pew&usqp=CAU';
    const posterImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const dispatch = useDispatch();
    const removeFavoritmovie = () => {
        dispatch(removeFavorite({
            id: id,
            overview: overview,
            title: title,
            poster_path: poster_path
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
              <StarIcon color={'text-warning '} id={id} function={() => { removeFavoritmovie(); }} /> 
        </div>
      </div>
          </div>
     
        </>
    )
}