import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  span {
    font-weight: 500;
  }
  font-weight: 100;
  font-size: 2.125em;
  line-height: 34px;
  letter-spacing: 4px;
  color: #64eebc;
`;
export const LogoLiteflix = () => {
  return (
    <Logo>
      <span>LITE</span>FLIX
    </Logo>
  );
};
