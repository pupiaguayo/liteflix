import React from "react";
import styled from "styled-components";
import { PlayMovieIcon } from "./icons/icons";
const MovieCardStyles = styled.button`
  border: none;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  width: 262.97px;
  height: 146px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  h2 {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 4px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

export const MovieCard = ({ title, urlMovie }) => {
  return (
    <MovieCardStyles img={`https://image.tmdb.org/t/p/w500/${urlMovie}`}>
      <PlayMovieIcon />
      <h2>{title}</h2>
    </MovieCardStyles>
  );
};
