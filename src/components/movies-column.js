import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { MovieCard } from "../utils/movie-card";
import { MoviesContainer, MoviesColumnEmpty } from "../styles/movies-container";
import { Select } from "../utils/dropdown-select";

export const MoviesColumn = () => {
  const { popularMovies, dropdownValue } = useContext(MoviesContext);

  let options = ["POPULARES", "MIS PELICULAS"];
  let savedItem = JSON.parse(localStorage.getItem("formValues"));
  let BASE_PATH = "https://image.tmdb.org/t/p/w780/";
  return (
    <MoviesContainer>
      <Select label={dropdownValue} values={options} />
      {dropdownValue === "POPULARES" ? (
        popularMovies
          ?.slice(0, 4)
          .map((movie) => (
            <MovieCard
              title={movie.title}
              urlMovie={`${BASE_PATH}${movie.backdrop_path}`}
              average={movie.vote_average}
              year={movie.release_date}
              key={movie.id}
            ></MovieCard>
          ))
      ) : savedItem?.length > 0 ? (
        savedItem
          ?.slice(0, 4)
          .map((movie, i) => (
            <MovieCard
              title={movie.title}
              urlMovie={movie.image}
              average="7.2"
              year="2018"
              key={i}
            ></MovieCard>
          ))
      ) : (
        <MoviesColumnEmpty>
          <h5>Su lista esta vacia</h5>
          <p>Agregue sus peliculas favoritas</p>
        </MoviesColumnEmpty>
      )}
    </MoviesContainer>
  );
};
