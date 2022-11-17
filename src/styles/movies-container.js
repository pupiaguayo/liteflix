import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MoviesContainer = styled.div`
  grid-column: 5/6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 0.9em;
  animation: ${fadeIn} 3s ease-in-out;
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ffff;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    span {
      font-weight: bold;
    }
    button{
      border: none;
      background: none;
      cursor: pointer;
    }
  }
p{
  text-transform: uppercase;
  color: #64EEBC;
}
  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    margin: auto;
  }
`;
