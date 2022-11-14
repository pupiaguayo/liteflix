import React from "react";
import styled from "styled-components";
import { PlayMovieIcon, StarIcon, HoverPlayMovieIcon } from "./icons/icons";

const DataHover = styled.div`
  display: none;
  width: 100%;
`;

const TitleButton = styled.div`
  width: 100%;
`;
const MovieCardStyles = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 262.97px;
  height: 146px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  h3,
  p {
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 4px;
    color: #ffffff;
    text-transform: uppercase;
  }
  &:hover {
    ${TitleButton} {
      display: flex;
      width: 90%;
      align-items: center;
      margin-bottom: 15px;
      h3 {
        display: flex;
        flex-wrap: nowrap;
        width: 70%;
        height: 20px;
        overflow: hidden;
        margin-left: 15px;
      }
    }
    ${DataHover} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      height: 20px;
      margin-bottom: 15px;
      div {
        height: 30px;
        display: flex;
        align-items: center;
        p {
          margin-left: 10px;
        }
      }
    }
  }
`;
export const MovieCard = ({ title, urlMovie, average, year }) => {
  return (
    <MovieCardStyles img={`https://image.tmdb.org/t/p/w500/${urlMovie}`}>
      <TitleButton>
        <PlayMovieIcon />
        <h3>{title}</h3>
      </TitleButton>
      <DataHover>
        <div>
          <StarIcon />
          <p>{average}</p>
        </div>
        <p>{year.slice(0, 4)}</p>
      </DataHover>
    </MovieCardStyles>
  );
};
