import React, { useEffect, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled from "styled-components";
import { Header } from "../utils/custom-header";
import { CurrentMovieData } from "../components/current-movie-data";
import { MoviesColumn } from "../components/movies-column";
import { ModalMovies } from "../utils/modal";

const ContainerHome = styled.div`
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  background-image: linear-gradient(
      rgba(36, 36, 36, 0.6),
      rgba(36, 36, 36, 0.6)
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 900px) {
    overflow: scroll;
    padding: 0 15px;
    font-size: 12px;
    background-image: linear-gradient(rgba(36, 36, 36, 0.3), #202020, #202020),
      url(${(props) => props.posterUrl});
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
export const Home = () => {
  const { starMovie, modalState, getStarMovie, getPopularMovies } =
    useContext(MoviesContext);
  let imageUrl = starMovie.backdrop_path;
  let posterUrl = starMovie.poster_path;

  useEffect(() => {
    getStarMovie();
    getPopularMovies();
  }, []);

  return (
    <ContainerHome
      imgUrl={`https://image.tmdb.org/t/p/w500${imageUrl}`}
      posterUrl={`https://image.tmdb.org/t/p/w500${posterUrl}`}
    >
      <Header />
      <CurrentMovieData title={starMovie.title} />
      <MoviesColumn />
      {modalState && <ModalMovies />}
    </ContainerHome>
  );
};
