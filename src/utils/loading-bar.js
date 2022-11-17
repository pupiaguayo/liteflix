import React from "react";
import styled, { css } from "styled-components";
const ContainerBar = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.primary === !true &&
    css`
       {
        display: none;
      }
    `}
  span {
    color: white;
    padding-left: 5%;
    letter-spacing: 2px;
  }
`;
const Container = styled.div`
  margin: auto;
  height: 7px;
  width: 90%;
  position: relative;
  border: 1px solid white;
  span {
    color: white;
    margin-right: 30px;
    margin-top: 20px;
  }
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.1s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${(props) => (props.color === "success" ? "#64eebc" : "red")};
  width: ${({ percent }) => percent}%;
`;
const ActionButton = styled.button`
  border: none;
  width: 10px;
  padding-left: 80%;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
`;
export const LoadingBar = ({ percentProp, viewInput, onClick, color }) => {
  return (
    <ContainerBar primary={viewInput}>
      {color !== "success" ? (
        <span>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</span>
      ) : percentProp < 100 ? (
        <span>CARGANDO {percentProp}</span>
      ) : (
        <span>100% CARGADO</span>
      )}
      <Container primary={viewInput}>
        <Background />
        <Progress percent={percentProp} color={color} />
      </Container>
      {color !== "success" ? (
        <ActionButton onClick={onClick}>reintentar</ActionButton>
      ) : percentProp < 100 ? (
        <ActionButton onClick={onClick}>cancelar</ActionButton>
      ) : (
        <ActionButton onClick={onClick}>Listo!</ActionButton>
      )}
    </ContainerBar>
  );
};
