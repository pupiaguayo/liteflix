import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-column: 1/6;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
