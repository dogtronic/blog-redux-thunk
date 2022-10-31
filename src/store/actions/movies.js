import * as actionTypes from "./actionTypes";

export const fetchMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START,
  };
};
export const fetchMoviesSuccess = (movies) => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFail = (error) => {
  return {
    type: actionTypes.FETCH_MOVIES_ERROR,
    error: error,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesStart());

    try {
      const apiKey = "YOUR API KEY";
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const movies = await data.json();

      setTimeout(() => {
        dispatch(fetchMoviesSuccess(movies.results));
      }, 1000);
    } catch (error) {
      dispatch(fetchMoviesFail(error));
    }
  };
};
