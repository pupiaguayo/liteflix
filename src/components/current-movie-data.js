import React from "react";
import { PlayIcon, PlusIcon } from "../utils/icons/icons";
import { ButtonStyle } from "../utils/custom-button";
import { CurrentMovieDataContainer } from "../styles/currentMovie-data-container";

export const CurrentMovieData = ({title}) => {
  return (
    <CurrentMovieDataContainer>
      <p>Original de <span>Liteflix</span></p>
      <h2>{title}</h2>
      <div>
        <ButtonStyle primary>
          {" "}
          <PlayIcon/>
          Reproducir
        </ButtonStyle>
        <ButtonStyle>
          {" "}
          <PlusIcon/>
          Mi lista
        </ButtonStyle>
      </div>
    </CurrentMovieDataContainer>
  );
};
