import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  movies: null,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case actionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
