import React, { useEffect, useState, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import { AttachIcon } from "./icons/icons";
import { ButtonModal } from "./button-modal";
import { LoadingBar } from "./loading-bar";
import { LogoLiteflix } from "./logo";
import styled, { css, keyframes } from "styled-components";

const translateLeft = keyframes`
from {
  transform: translateY(100vh)
}
to {
  transform: translateX(0)
}
`;
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
  h5 {
    font-size: 1.5em;
    color: #ffff;
    letter-spacing: 4px;
    font-weight: 700;
  }
  p {
    margin-top: 0px;
    font-size: 1.25em;
    text-transform: uppercase;
    color: white;
  }
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
  animation: ${translateLeft} 1s ease-in-out;
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
  ${(props) =>
    props.primary === true &&
    css`
       {
        display: none;
      }
    `}
  label {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      justify-content: center;
      span {
        white-space: nowrap;
        overflow: hidden;
        width: 130px;
        margin-left: 15px;
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
  const [percentBar, setPercentBar] = useState(0);
  const [viewInput, setViewInput] = useState(false);
  const [conditionView, setConditionView] = useState(true);
  const [uploadMovieCondition, setUploadMovieCondition] = useState(true);
  const [colorLoading, setColorLoading] = useState("success");
  let savedItem = JSON.parse(localStorage.getItem("formValues")) || [];
  const closeMovieModal = () => {
    getModalState(false);
  };
  const [myMovies, setMyMovies] = useState({
    title: "",
    image: "",
  });

  const [formValues, setFormValues] = useState(savedItem);

  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, myMovies]);
    setConditionView(false);
  };
  const inputMovieImages = (e) => {
    const file = e.target.files[0];
    let fileReader;

    if (file && file.type.match("image.*")) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        setViewInput(true);
        setPercentBar(40);
        const { result } = e.target;

        if (result) {
          setTimeout(() => setPercentBar(100), 1000);
          setMyMovies({ ...myMovies, image: result });
          setColorLoading("success");
          setUploadMovieCondition(false);
        }
        if (colorLoading !== "success") {
          fileReader.abort();
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  const handleClick = () => {
    colorLoading !== "success"
      ? setViewInput(false)
      : colorLoading === "success" && percentBar < 100
      ? setColorLoading(false)
      : setColorLoading("success");
  };
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  return (
    <ModalContainer>
      <Modal>
        {conditionView ? (
          <>
            <CloseModal onClick={closeMovieModal}>X</CloseModal>
            <AddMovieTitle>Agregar Pelicula</AddMovieTitle>
            <AddArchiveInput primary={viewInput}>
              <label htmlFor="files">
                <AttachIcon />
                <span>Agregá un archivo o arrastralo y soltalo aquí</span>
              </label>
              <input
                id="files"
                type="file"
                defaultValue={myMovies.image}
                onChange={(e) => inputMovieImages(e)}
              />
            </AddArchiveInput>
            <LoadingBar
              percentProp={percentBar}
              viewInput={viewInput}
              onClick={handleClick}
              color={colorLoading}
            />
            <MovieTitle
              type="text"
              placeholder="titulo"
              value={myMovies.title}
              onChange={(e) =>
                setMyMovies({ ...myMovies, title: e.target.value })
              }
            />
            <ButtonModal
              primary={"primary"}
              title={"subir pelicula"}
              onClick={() => {
                submitForm();
              }}
              disabled={uploadMovieCondition}
            />
            <ButtonModal
              title={"salir"}
              onClick={() => {
                closeMovieModal();
              }}
            />
          </>
        ) : (
          <>
            <LogoLiteflix />
            <h5>¡FELICITACIONES!</h5>
            <p>Liteflix The Movie fue correctamente subida.</p>
            <ButtonModal
              primary={"primary"}
              title={"Ir a home"}
              onClick={() => {
                closeMovieModal();
              }}
            />
          </>
        )}
      </Modal>
    </ModalContainer>
  );
};
