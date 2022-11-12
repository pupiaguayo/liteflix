import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { MovieCard } from "../utils/movie-card";
import { MoviesContainer } from "../styles/movies-container";

export const MoviesColumn = () => {
  const { popularMovies } = useContext(MoviesContext);

  return (
    <MoviesContainer>
      <h3>
        Ver: <span> Populares </span>{" "}
      </h3>
      {popularMovies?.length
        ? popularMovies
            ?.slice(0, 4)
            .map((movie) => (
              <MovieCard
                title={movie.title}
                urlMovie={movie.backdrop_path}
              ></MovieCard>
            ))
        : null}
    </MoviesContainer>
  );
};
