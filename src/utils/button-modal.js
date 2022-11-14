import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40%;
  height: 46px;
  margin-top: 10px;
  color: #242424;
  text-transform: uppercase;
  letter-spacing: 4px;
`;
export const ButtonModal = ({ title }) => {
  return <Button>{title}</Button>;
};
