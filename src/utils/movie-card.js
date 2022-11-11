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
  background: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-crown-real-life-queen-elizabeth-1573853529.jpg?crop=0.489xw:0.978xh;0,0&resize=640:*");
  h2 {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 4px;
    color: #ffffff;
  }
`;

export const MovieCard = () => {
  return (
    <MovieCardStyles>
      <PlayMovieIcon/>
      <h2>THE CROWN</h2>
    </MovieCardStyles>
  );
};
