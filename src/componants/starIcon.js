import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setFavorite } from './../store/actions/favorites'
var moviesIds = [];
export default function StarIcon(props) {
    const dispatch = useDispatch();
    // const idCollection = (e) => { 
    //     moviesIds.push(props.id);
    //     dispatch(setFavorite(moviesIds))
    // };
    // console.log(moviesIds);
    
    return (
        <>
            <h6> Add to your wish list: <FontAwesomeIcon icon={faStar} className={props.color} id={props.id} onClick={props.function}></FontAwesomeIcon></h6>
        </>
    );
}