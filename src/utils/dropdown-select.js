import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ArrowDropdown } from "./icons/icons";

const SelectContainer = styled.div`
  width: 100%;
`;
const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  font-size: 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ffff;
  transition: 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  span {
    font-weight: 100;
  }
`;

const DropdownStyle = styled.div`
  position: absolute;
  margin-top: 12px;
  right: 60px;
  width: 300px;
  height: auto;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #202020;
  transition: max-height 0.2s ease;
  padding: 20px 0;
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
  @media screen and (max-width: 900px) {
    position: fixed;
    right: 0;
    bottom: 0vh;
    margin-top: 30px;
    width: 100vw;
  }
`;

const DropdownItem = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  color: white;
  margin: 0.15rem 0;
  padding: 2px 40px;
  cursor: pointer;
  font-weight: lighter;
  font-size: 1em;
  ${(p) =>
    p.active &&
    css`
      font-weight: bolder;
    `}
  &:hover, :focus, :focus:hover {
    outline: none;
  }
  @media screen and (max-width: 900px) {
    padding: 2px 80px;
  }
`;

export const Select = ({ label, values, onChange }) => {
  const [currentValue, setCurrentValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    if (onChange) onChange(value);
    handleClose();
  };
  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        <span>Ver:</span>
        {currentValue !== "" ? currentValue : label}
        <ArrowDropdown />
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};
