import React from "react";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.movies
        .filter((movie) => movie.poster_path && movie.overview)
        .map((movie) => {
          return (
            <div className="card" key={movie.id}>
              <img
                className="card__image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
              <div className="card__content">
                <h2 className="movie-title">{movie.title}</h2>
                <p>
                  <small>{movie.release_date}</small>
                </p>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
              </div>
              <div className="card__desc">
                <p>{movie.overview}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
