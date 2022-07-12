import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import LanguageContext from './../context/langaugeContext';
import React, {useState,useContext } from 'react';

//https://api.themoviedb.org/3/search/movie?api_key=2d896cea1324879a1fcee9cdb081a484&query=The Desperate Hour
function Navebar() {
  const {contextLang,setContextLang} = useContext(LanguageContext);
  const changeAppLanguage = () => {
    setContextLang(contextLang === 'en' ? 'ar' : 'en');
    console.log(contextLang);
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger" to="/">
            Movies
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/favorit">
                  Favorites  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" >
                  <button className="mx-5" onClick={()=>changeAppLanguage()} > Change language</button>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navebar;

//  {/* <li className="nav-item">
//           <a className="nav-link" to="#">Link</a>
//         </li> */}
//         <li className="nav-item dropdown">
//           {/* <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
//             Dropdown
//           {/* </a> */}
//           {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" to="#">Action</a></li>
//             <li><a className="dropdown-item" to="#">Another action</a></li>
//             <li><hr className="dropdown-divider"></li>
//             <li><a className="dropdown-item" to="#">Something else here</a></li>
//           </ul> */}
//         </li>
//         {/* <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
