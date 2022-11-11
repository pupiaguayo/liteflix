import React from "react";
import styled from "styled-components";
import { PlusIcon } from "./icons/icons";

export const AddMovieButton = () => {
  const ButtonAddMovie = styled.button`
    display: flex;
    align-items: center;
    background: none;
    color: #ffff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 4px;
    border: none;
    gap: 10px;
  `;
  return (
    <ButtonAddMovie>
      <PlusIcon /> <span>Agregar Pelicula</span>
    </ButtonAddMovie>
  );
};
