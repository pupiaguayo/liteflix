import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  width: 40%;
  height: 46px;
  margin-top: 10px;
  color: ${(props) => (props.primary === "primary" ? "#242424" : "#ffff")};
  text-transform: uppercase;
  letter-spacing: 4px;
  border: ${(props) =>
    props.primary === "primary" ? "none" : "1px solid #ffff"};
  background-color: ${(props) =>
    props.primary === "primary" ? "#ffff" : "transparent"};
    opacity:${(props) =>
    props.disabled === true ? "0.5" : "1"};
  @media screen and (max-width: 900px) {
    width: 65%;
  }
  cursor: pointer;
  ${(props) =>
    props.primary !== "primary" &&
    css`
      @media only screen and (min-width: 900px) {
        display: none;
      }
    `}
`;
export const ButtonModal = ({ title, onClick, primary, disabled }) => {
  return (
    <Button primary={primary} onClick={onClick} disabled={disabled} aria-label="Button openModal">
      {title}
    </Button>
  );
};
