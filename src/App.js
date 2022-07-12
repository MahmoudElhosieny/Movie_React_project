// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Mainpage";
import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
   Route,
 
} from "react-router-dom";
import Navebar from "./componants/NaveBar";
import FavoritPages from "./pages/Favorites";
import Search from './pages/SearchPage';
import NotFound from './pages/NotFound';
import LanguageContext from "./context/langaugeContext";

function App() {
  const [contextLang,setContextLang] = useState('en');
  return (
    <Router>
      <LanguageContext.Provider value={{contextLang,setContextLang}}>
      <Navebar />
      <div className="container-fluid border">
        <Switch>
        <Route path="/" exact component={Main} />
          <Route path="/favorit" exact component={FavoritPages} />
          <Route path='/search' exact component={Search}/>
          <Route path="*" exact component={NotFound} />
        </Switch>
        </div>
        </LanguageContext.Provider>
    </Router>
  );
}

export default App;
