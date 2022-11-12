import styled from "styled-components";

export const MoviesContainer = styled.div`
  grid-column: 5/6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  gap: 0.9em;
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
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    margin: auto;
  }
`;
