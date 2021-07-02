import React, { useEffect, useState } from 'react'
import getGenres from '../utils/getGenres'
import { MovieListContainer } from './MovieListContainer'
import MovieList from '../components/movieList'
import { Link } from 'react-router-dom'
export function GetMovie() {
    
    const [movies, setMovies] = useState([{}])
    
    useEffect(() => {
        async function genresGetter() {
          const genres = await getGenres();
            setMovies(genres);
        }
        genresGetter()
        
    },[])
    return (
      <>
            <MovieList.Group>
                <Link to = "/search">
                    <MovieList.Button>Search for Movies Instead</MovieList.Button>
                </Link>
          
          {movies.map((movie, index) => {
            return (
              <div key={index}>
                <MovieList.Title>{movie.name}</MovieList.Title>
                <MovieListContainer genre={movie} />
              </div>
            );
          })}
        </MovieList.Group>
      </>
    );
}