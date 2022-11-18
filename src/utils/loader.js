import styled from "styled-components";

export const Spinner = styled.div`
  border: 10px solid #64eebc;
  border-top: 10px #ffff solid;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;