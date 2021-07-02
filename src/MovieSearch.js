import React, { useState } from "react";
import MovieList from "./components/movieList/index.js";
import {Link} from 'react-router-dom'
import "./App.css";

const MovieSearch = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const movieSearch = async (e) => {
    e.preventDefault();
    const query = inputQuery;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US&query=${query}&page=1`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results)
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
    console.log(movies[0]);
  };
  return (
    <>
      <div className="container">
        <Link to="/">
          <MovieList.Button>Home</MovieList.Button>
        </Link>
        <h1 className="title">Search for a movie</h1>
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
      </div>
      <MovieList.Group>
        <MovieList.Entities>
          {movies.map((movie, index) => {
            return (
              <Link to={`/movies/${movie.id}`} key={index}>
                <MovieList.Item key={index}>
                  <MovieList.Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : "/images/RandomMoviePic.jpg"
                    }
                    alt="MoviePoster"
                  />
                  <MovieList.Meta>
                    <MovieList.SubTitle>
                      {movie.original_title}
                    </MovieList.SubTitle>
                    <MovieList.Text>{movie.overview}</MovieList.Text>
                  </MovieList.Meta>
                </MovieList.Item>
              </Link>
            );
          })}
        </MovieList.Entities>
      </MovieList.Group>
    </>
  );
};

export default MovieSearch;
