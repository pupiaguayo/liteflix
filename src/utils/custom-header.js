import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AddMovieButton } from "./add-movie-button";
import { LogoLiteflix } from "./logo";
import {
  NotificationBellIcon,
  MenuDesktopIcon,
  MenuMobileIcon,
  ProfileIcon,
} from "../utils/icons/icons";
import { Menu } from "../components/menu";
const HeaderContainer = styled.div`
  grid-column: 1/6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  div {
    display: flex;
    align-items: center;
    grid-gap: 30px;
  }
  ${(props) =>
    props.isDesktop &&
    css`
      @media only screen and (max-width: 900px) {
        display: none;
      }
    `}
  ${(props) =>
    props.isMobile &&
    css`
      @media only screen and (min-width: 900px) {
        display: none;
      }
    `}
`;
export const Header = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const showSidebar = () => {
    setSidemenu(true);
  };
  return (
    <>
      <HeaderContainer isDesktop>
        <div>
          <LogoLiteflix />
          <AddMovieButton />
        </div>

        <div>
          <button onClick={showSidebar}>
            <MenuDesktopIcon />
          </button>
          <button>
            <NotificationBellIcon />
          </button>
          <ProfileIcon />
        </div>
      </HeaderContainer>

      <HeaderContainer isMobile>
        <button onClick={showSidebar}>
          <MenuMobileIcon />
        </button>
        <LogoLiteflix />
        <ProfileIcon />
      </HeaderContainer>

      {sidemenu && <Menu setMenu={setSidemenu} />}
    </>
  );
};
