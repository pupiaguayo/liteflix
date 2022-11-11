import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { CurrentMovieData } from "../components/current-movie-data";
import { MoviesColumn } from "../components/movies-column";

export const Home = () => {
  const ContainerHome = styled.div`
    padding: 0 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: 900px) {
      padding: 0 15px;
      font-size: 12px;
  }
  `;

  return (
    <ContainerHome>
      <Header />
      <CurrentMovieData />
      <MoviesColumn />
    </ContainerHome>
  );
};
