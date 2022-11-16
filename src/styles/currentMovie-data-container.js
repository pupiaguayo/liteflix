import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const translateLeft = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(0)
  }
`;
const translateRight = keyframes`
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0)
  }
`;
export const CurrentMovieDataContainer = styled.div`
  grid-column: 1/5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin-top: 48vh;
    margin-bottom: 0;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 100;
    font-size: 1.25em;
    line-height: 1em;
    letter-spacing: 0.25em;
    animation: ${fadeIn} 1.5s ease-in-out;
    animation: ${translateRight} 1.5s ease-in-out;
    span {
      font-weight: 400;
    }
  }
  h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    height: auto;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 5.5em;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: #64eebc;
    margin-top: 0;
    margin-bottom: 30px;
    animation: ${fadeIn} 1.5s ease-in-out;
    animation: ${translateLeft} 1.5s ease-in-out;
  }
  div {
    display: flex;
    gap: 20px;
    animation: ${fadeIn} 2s ease-in-out;
  }
  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
      margin-top: 15vh;
    }
    h2 {
      white-space: normal;
    }
    div {
      margin: auto;
      flex-direction: column;
    }
  }
`;
