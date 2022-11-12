import { GET_POPULAR_MOVIES, GET_STAR_MOVIE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: payload,
      };
    case GET_STAR_MOVIE:
      return {
        ...state,
        starMovie: payload,
      };
    default:
      return state;
  }
};
