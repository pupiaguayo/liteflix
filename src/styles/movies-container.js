import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MoviesContainer = styled.div`
  grid-column: 5/6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 0.9em;
  animation: ${fadeIn} 3s ease-in-out;
  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    margin: auto;
  }
`;
const MoviesColumnEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  h5 {
    margin-top: 0;
    text-transform: uppercase;
    color: #64eebc;
    font-size: 1.1em;
  }
  p{
    margin-top: 0;
    text-transform: uppercase;
    color: #64eebc;
    font-size: 1.1em;

  }
`;
export { MoviesContainer, MoviesColumnEmpty };
