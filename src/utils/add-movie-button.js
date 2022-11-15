import React, { useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled from "styled-components";
import { PlusIcon } from "./icons/icons";

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
  padding: ${(props) =>
    props.primary === true ? "30px 0" : "none"};
`;
export const AddMovieButton = ({primary}) => {
  const { getModalState } = useContext(MoviesContext);

  const addMovieModal = () => {
    getModalState(true);
  };

  return (
    <ButtonAddMovie primary={primary} onClick={addMovieModal}>
      <PlusIcon /> <span>Agregar Pelicula</span>
    </ButtonAddMovie>
  );
};
