import { GET_POPULAR_MOVIES, GET_STAR_MOVIE, GET_MODAL_STATE, GET_DROPDOWN_VALUE } from "../types";

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
    case GET_MODAL_STATE:
      return {
        ...state,
        modalState: payload,
      };
      case GET_DROPDOWN_VALUE:
        return {
          ...state,
          dropdownValue: payload,
        };
    default:
      return state;
  }
};
