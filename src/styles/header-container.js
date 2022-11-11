import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-column: 1/6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25em;
  div {
    display: flex;
    align-items: center;
    grid-gap: 30px;
    button {
      cursor: pointer;
      border: none;
      background: none;
    }
  }
  h1 {
    span {
      font-weight: bold;
    }
    font-style: normal;
    font-weight: 100;
    font-size: 2.125em;
    line-height: 34px;
    letter-spacing: 4px;
    color: #64eebc;
  }
`;
