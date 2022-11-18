import React, { useState, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled, { css } from "styled-components";
import { ArrowDropdown, CheckIcon } from "./icons/icons";

const CheckIconContainer = styled.span`
  display: none;
`;
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
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #202020;
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
  justify-content: space-between;
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
      ${CheckIconContainer} {
        display: block;
      }
    `}
  &:hover, :focus, :focus:hover {
    outline: none;
  }
  @media screen and (max-width: 900px) {
    padding: 2px 80px;
  }
`;

export const Select = ({ label, values, onChange }) => {
  const { getDropdownValue, dropdownValue } = useContext(MoviesContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    getDropdownValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    if (onChange) onChange(value);
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen} aria-label="Button Select Label">
        <span>Ver:</span>
        {dropdownValue !== "" ? dropdownValue : label}
        <ArrowDropdown />
      </SelectLabelButton>

      <DropdownStyle isVisible={open} open={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value === dropdownValue}
            key={index}
          >
            {value}
            <CheckIconContainer>
              <CheckIcon />
            </CheckIconContainer>
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};
