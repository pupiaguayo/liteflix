import React from "react";
import styled from "styled-components";
import { ProfileIcon } from "./icons/icons";
const UserIconContainer = styled.div`
`;
export const UserIcon = () => {
  return (
    <UserIconContainer>
      <ProfileIcon />
    </UserIconContainer>
  );
};
