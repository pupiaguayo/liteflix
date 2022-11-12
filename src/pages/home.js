import React, { useEffect, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled from "styled-components";
import { Header } from "../components/header";
import { CurrentMovieData } from "../components/current-movie-data";
import { MoviesColumn } from "../components/movies-column";

export const Home = () => {
  const { starMovie, getStarMovie, getPopularMovies } =
    useContext(MoviesContext);
  let imageUrl = starMovie.backdrop_path;
  useEffect(() => {
    getStarMovie();
    getPopularMovies();
  }, []);
  const ContainerHome = styled.div`
    padding: 0 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-image: url(https://image.tmdb.org/t/p/w500${imageUrl});
    background-size: cover;
    background-position: center center;
    @media screen and (max-width: 900px) {
      padding: 0 15px;
      font-size: 12px;
    }
  `;
  return (
    <ContainerHome>
      <Header />
      <CurrentMovieData title={starMovie.title} />
      <MoviesColumn />
    </ContainerHome>
  );
};
