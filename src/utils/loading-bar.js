import React from "react";
import styled, { css } from "styled-components";
const ContainerBar = styled.div`
  width: 90%;
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
    letter-spacing: 2px;
    display: flex;
    justify-content: flex-start;
  }
`;
const Container = styled.div`
  margin: auto;
  height: 7px;
  width: 100%;
  position: relative;
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
  background: ${(props) => (props.color === "success" ? "#64eebc" : "#ff0000")};
  width: ${({ percent }) => percent}%;
`;
const ActionButton = styled.button`
  border: none;
  letter-spacing: 3px;
  font-weight: 700;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  width: 50%;
  margin-left: 50%;
  display: flex;
  justify-content: end;
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
        <ActionButton onClick={onClick} aria-label="Button Retry">reintentar</ActionButton>
      ) : percentProp < 100 ? (
        <ActionButton onClick={onClick} aria-label="Button Cancel Upload">cancelar</ActionButton>
      ) : (
        <ActionButton onClick={onClick} aria-label="Button Ready">Listo!</ActionButton>
      )}
    </ContainerBar>
  );
};
