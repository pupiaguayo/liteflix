import React, { useReducer } from "react";
import {
  GET_MODAL_STATE,
  GET_POPULAR_MOVIES,
  GET_STAR_MOVIE,
  GET_DROPDOWN_VALUE,
} from "../types";

import MoviesContext from "./movies-context";
import MoviesReducer from "./movies-reducer";

export const MoviesState = (props) => {
  const initialState = {
    popularMovies: [],
    starMovie: [],
    modalState: false,
    dropdownValue: "POPULARES",
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const getPopularMovies = async () => {
    try {
      let response = await fetch(
        " https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      let res = await response.json();
      const data = res.results;
      dispatch({ type: GET_POPULAR_MOVIES, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
  const getStarMovie = async () => {
    try {
      let response = await fetch(
        " https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      let res = await response.json();
      const data = res.results;
      dispatch({ type: GET_STAR_MOVIE, payload: data[0] });
    } catch (e) {
      console.log(e);
    }
  };
  const getModalState = (statex) => {
    dispatch({ type: GET_MODAL_STATE, payload: statex });
  };
  const getDropdownValue = (dropdownValue) => {
    dispatch({ type: GET_DROPDOWN_VALUE, payload: dropdownValue });
  };
  return (
    <MoviesContext.Provider
      value={{
        popularMovies: state.popularMovies,
        starMovie: state.starMovie,
        modalState: state.modalState,
        dropdownValue: state.dropdownValue,
        getPopularMovies,
        getStarMovie,
        getModalState,
        getDropdownValue,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
