import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { MovieCard } from "../utils/movie-card";
import { MoviesContainer } from "../styles/movies-container";
import { Select } from "../utils/dropdown-select";

export const MoviesColumn = () => {
  const { popularMovies } = useContext(MoviesContext);
  let options = [
    "POPULARES",
    "MIS PELICULAS",
  ];
  return (
    <MoviesContainer>
      <Select
        label="PELICULAS"
        values={options}
      />
      {popularMovies?.length
        ? popularMovies
            ?.slice(0, 4)
            .map((movie) => (
              <MovieCard
                title={movie.title}
                urlMovie={movie.backdrop_path}
                average={movie.vote_average}
                year={movie.release_date}
              ></MovieCard>
            ))
        : null}
    </MoviesContainer>
  );
};
