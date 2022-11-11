import styled from "styled-components";

export const CurrentMovieDataContainer = styled.div`
  grid-column: 1/5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    margin-top: 48vh;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 20px;
    letter-spacing: 0.25em;
  }
  h2 {
    font-weight: 700;
    font-size: 5.5em;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: #64eebc;
    margin-top: 5px;
    margin-bottom: 30px;
  }
  div {
    display: flex;
    gap: 20px;
  }
  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      margin-top: 30vh;
    }
    div {
      margin: auto;
      flex-direction: column;
    }
  }
`;
