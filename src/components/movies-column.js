import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { MovieCard } from "../utils/movie-card";
import { MoviesContainer } from "../styles/movies-container";
import { Select } from "../utils/dropdown-select";

export const MoviesColumn = () => {
  const { popularMovies, dropdownValue } = useContext(MoviesContext);

  let options = ["POPULARES", "MIS PELICULAS"];
  let savedItem = JSON.parse(localStorage.getItem("formValues"));
  
  return (
    <MoviesContainer>
      <Select label={dropdownValue} values={options} />
      {dropdownValue === "POPULARES"
        ? popularMovies
            ?.slice(0, 4)
            .map((movie) => (
              <MovieCard
                title={movie.title}
                urlMovie={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                average={movie.vote_average}
                year={movie.release_date}
                key={movie.id}
              ></MovieCard>
            ))
        : savedItem
            ?.slice(0, 4)
            .map((movie, i) => (
              <MovieCard
                title={movie.title}
                urlMovie={movie.image}
                average="7.2"
                year="2018"
                key={i}
              ></MovieCard>
            ))}
    </MoviesContainer>
  );
};
