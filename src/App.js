import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/actions/movies";

function App() {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector((store) => store.movies);

  const loadMovies = () => {
    dispatch(fetchMovies());
  };

  return (
    <div className="container">
      <button className="button" onClick={loadMovies}>
        Fetch movies
      </button>

      {isLoading ? (
        <div className="loader"></div>
      ) : movies ? (
        <div className="moviesContainer">
          {movies.map((movie) => {
            const imageURL = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

            return (
              <div className="movie" key={movie.id}>
                <div className="posterImgContainer">
                  <img className="posterImg" src={imageURL} alt="poster" />
                </div>
                <div className="posterInfo">
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
