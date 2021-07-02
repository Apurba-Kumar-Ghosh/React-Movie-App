import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link}  from "react-router-dom";
import MovieList from "../components/movieList/index";

export function MovieListContainer({ genre }) {
  const [movies, setMovies] = useState([{}]);
    
  useEffect(() => {
      async function getMovies() {
          try {
              const data = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US&sort_by=popularity.desc&with_genres=${genre.id}&release_date.gte=2015`
              );
              const temp = await data.data.results
              setMovies(temp);
          }
          catch(error) {
              console.log(error)
          }
      
    }
    getMovies();
  }, [genre]);
    return <>
    <MovieList.Entities>
      {movies.map((movie, index) => {
          return (
            <Link to = {`/movies/${movie.id}`} key = {index}>
              <MovieList.Item key={index}>
                <MovieList.Image
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
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
    </>
    
}
