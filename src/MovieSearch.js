import React, { useState } from "react";
import CardList from "./CardList.js";

const MovieSearch = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const movieSearch = async (e) => {
    e.preventDefault();
    const query = inputQuery;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US&query=${query}&page=1`;
    try {
      console.log(inputQuery);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
    console.log(movies[0]);
  };
  return (
    <>
      <div>
        <form className="form" onSubmit={movieSearch}>
          <label htmlFor="query" className="label">
            Movie Name
          </label>
          <input
            className="input"
            value={inputQuery}
            type="text"
            name="query"
            placeholder="movie name"
            onChange={(e) => setInputQuery(e.target.value)}
          />

          <button type="submit" className="button">
            SUBMIT
          </button>
        </form>
      </div>
      <CardList movies={movies} />
    </>
  );
};

export default MovieSearch;
