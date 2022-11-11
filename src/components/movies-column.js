import React from "react";

import { MovieCard } from "../utils/movie-card";
import { MoviesContainer } from "../styles/movies-container";

export const MoviesColumn = () => {
  return (
    <MoviesContainer>
      <h3>
        Ver: <span> Populares </span>{" "}
      </h3>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
    </MoviesContainer>
  );
};
