import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";
import ReduxThunk from "redux-thunk";

const middlewares = [ReduxThunk];

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: middlewares,
});

export default store;
