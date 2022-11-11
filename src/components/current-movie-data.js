import React from "react";

import { PlayIcon, PlusIcon } from "../utils/icons/icons";
import { ButtonStyle } from "../utils/custom-button";
import { CurrentMovieDataContainer } from "../styles/currentMovie-data-container";

export const CurrentMovieData = () => {
  return (
    <CurrentMovieDataContainer>
      <span>Original de Liteflix</span>
      <h2>La casa de papel</h2>
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
