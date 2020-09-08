//https://api.themoviedb.org/3/movie/search/550?api_key=bcc9da9e9d42bc258ad578ae21559efd
import React from "react";
import "./App.css";
import MovieSearch from "./MovieSearch";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Movie Search App</h1>
      <MovieSearch />
    </div>
  );
};

export default App;
