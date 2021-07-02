//https://api.themoviedb.org/3/movie/search/550?api_key=bcc9da9e9d42bc258ad578ae21559efd
import React from "react";

import { GetMovie } from "./containers/GetMovies";
import {Route} from 'react-router-dom'
import { MovieInfoContainer } from "./containers/MovieInfoContainer";
import MovieSearch from "./MovieSearch";
const App = () => {
  return (
    <>
      <Route exact path="/movies/:id" component={MovieInfoContainer} />
      <Route exact path="/" component={GetMovie} />
      <Route exact path="/search" component={MovieSearch} />
      <Route exact path="/something" >
        <div>
          hello sexyyyy
        </div>
      </Route>
    </>
  );
};

export default App;
