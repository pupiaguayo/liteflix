import React, { useEffect, useState, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { AttachIcon } from "./icons/icons";
import { ButtonModal } from "./button-modal";
import styled from "styled-components";

const ModalContainer = styled.div`
  background: rgba(36, 36, 36, 0.7);
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: #202020;
  width: 630px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
`;
const CloseModal = styled.button`
  margin-top: 2%;
  margin-left: 92%;
  border: none;
  color: white;
  background-color: transparent;
  right: 0;
`;
const AddMovieTitle = styled.h4`
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #64eebc;
`;
const AddArchiveInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80%;
  height: 25%;
  background-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffff;
  border-style: dotted;
  border: 2px dotted #ffff;
  cursor: pointer;
  input {
    display: none;
  }
`;

const MovieTitle = styled.label`
  background-color: transparent;
  text-align: center;
  width: 40%;
  border: none;
  border-bottom: solid #ffff;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  input {
    display: none;
  }
`;
export const ModalMovies = () => {
  const { getModalState } = useContext(MoviesContext);

  const closeMovieModal = () => {
    getModalState(false);
  };
  const [myMovies, setMyMovies] = useState([
    {
      title: "",
      image: "",
    },
  ]);

  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, myMovies]);
  };
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);
  return (
    <ModalContainer>
      <Modal>
        <CloseModal onClick={closeMovieModal}>X</CloseModal>
        <AddMovieTitle>Agregar Pelicula</AddMovieTitle>
        <AddArchiveInput for="inputAddMovie">
          <AttachIcon />
          Agregá un archivo o arrastralo y soltalo aquí
          <input
            id="inputAddMovie"
            type="file"
            value={myMovies.image}
            onChange={(e) =>
              setMyMovies({
                ...myMovies,
                image: e.target.value,
              })
            }
          />
        </AddArchiveInput>
        <MovieTitle for="inputMovieTitle">
          Titulo
          <input
            id="inputMovieTitle"
            type="file"
            value={myMovies.title}
            onChange={(e) =>
              setMyMovies({ ...myMovies, title: e.target.value })
            }
          />
        </MovieTitle>
        <ButtonModal title={"Subir PELICULA"} onClick={submitForm} />
      </Modal>
    </ModalContainer>
  );
};
