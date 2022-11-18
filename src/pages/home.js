import React, { useState, useEffect, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled from "styled-components";
import { Header } from "../utils/custom-header";
import { CurrentMovieData } from "../components/current-movie-data";
import { MoviesColumn } from "../components/movies-column";
import { ModalMovies } from "../utils/modal";
import { Spinner } from "../utils/loader";
const LoadingScreen = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(36, 36, 36, 0.9);
`;
const ContainerHome = styled.div`
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-height: 100%;
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
      url(${(props) => props.imgUrl});
    background-position: top center;
    background-attachment: local;
    background-repeat: no-repeat;
  }
`;
export const Home = () => {
  const { starMovie, modalState, getStarMovie, getPopularMovies } =
    useContext(MoviesContext);
  const [loading, setLoading] = useState(true);
  let PATH_URL = "https://image.tmdb.org/t/p/w780/";
  let imageUrl = starMovie.backdrop_path;
  useEffect(() => {
    getStarMovie();
    getPopularMovies();
    setTimeout(() => setLoading(false), 1000)
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen>
          <Spinner />
        </LoadingScreen>
      )}
      <ContainerHome imgUrl={imageUrl ? `${PATH_URL}${imageUrl}` : ""}>
        <Header />
        <CurrentMovieData title={starMovie.title} />
        <MoviesColumn />
        {modalState && <ModalMovies />}
      </ContainerHome>
    </>
  );
};