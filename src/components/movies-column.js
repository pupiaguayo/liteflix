import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { MovieCard } from "../utils/movie-card";
import { MoviesContainer } from "../styles/movies-container";
import { Select } from "../utils/dropdown-select";

export const MoviesColumn = () => {
  const { popularMovies, dropdownValue } = useContext(MoviesContext);
  let options = ["POPULARES", "MIS PELICULAS"];
  let savedItem = localStorage.getItem("formValues");
  return (
    <MoviesContainer>
      <Select label="POPULARES" values={options} />
      {dropdownValue === "POPULARES"
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
        : savedItem
            ?.slice(0, 1)
            .map((movie) => (
              <MovieCard
                title={movie.title}
                urlMovie={movie.backdrop_path}
              ></MovieCard>
            ))}
    </MoviesContainer>
  );
};
