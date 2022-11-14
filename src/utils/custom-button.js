import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) =>
    props.primary ? "#202020" : "rgba(36, 36, 36, 0.5)"};
  border: ${(props) =>
    props.primary ? "none" : "1px solid rgba(255, 255, 255, 0.5)"};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.5em;
  height: 3.5em;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 4px;
  text-transform: uppercase;
  gap: 10px;
`;
