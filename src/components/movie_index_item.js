import React from "react";
import { imgURLBuilder } from "../config/api_util";
import "../css/movie_index_item.css";


const MovieIndexItem = movie => (
  <>
    <div className="movie-poster">
      <img src={imgURLBuilder(movie.poster_path)} alt={movie.title} />
    </div>
    <div className="movie-details">
      <h1 className="movie-title">{movie.title}</h1>
      <h2 className="movie-year">Released: {movie.release_date}</h2>
      <p className="movie-overview">{movie.overview}</p>
    </div>
  </>
);

export default MovieIndexItem;