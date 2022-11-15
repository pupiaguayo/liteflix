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
  @media screen and (max-width: 900px) {
    background: #202020;
  }
`;
const Modal = styled.div`
  background-color: #202020;
  width: 630px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const CloseModal = styled.button`
  margin-top: 2%;
  margin-left: 92%;
  border: none;
  color: white;
  background-color: transparent;
  right: 0;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const AddMovieTitle = styled.h4`
  font-size: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #64eebc;
`;
const AddArchiveInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80%;
  height: 20%;
  background-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffff;
  border-style: dotted;
  border: 2px dotted #ffff;
  cursor: pointer;
  label {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    @media screen and (max-width: 900px) {
      justify-content: center;
    span{

      white-space: nowrap;
      overflow: hidden;
    }
  }
  }
  input {
    display: none;
  }
`;

const MovieTitle = styled.input`
  background-color: transparent;
  text-align: center;
  width: 40%;
  border: none;
  border-bottom: solid #ffff;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  &::placeholder {
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1em;
  }
  outline: none;

  @media screen and (max-width: 900px) {
    width: 65%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;
export const ModalMovies = () => {
  const { getModalState } = useContext(MoviesContext);

  const closeMovieModal = () => {
    getModalState(false);
  };
  const [myMovies, setMyMovies] = useState({
    title: "",
    image: "",
  });

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
        <AddArchiveInput>
          <label for="files">
            <AttachIcon />
            <span>Agregá un archivo o arrastralo y soltalo aquí</span>
          </label>
          <input
            id="files"
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
        <MovieTitle
          type="text"
          placeholder="titulo"
          value={myMovies.title}
          onChange={(e) => setMyMovies({ ...myMovies, title: e.target.value })}
        />
        <ButtonModal
          primary={"primary"}
          title={"subir pelicula"}
          onClick={() => {
            submitForm();
          }}
        />
        <ButtonModal
          title={"salir"}
          onClick={() => {
            closeMovieModal();
          }}
        />
      </Modal>
    </ModalContainer>
  );
};
