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
`;

const HeaderDesktop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    grid-gap: 30px;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const HeaderMobile = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Header = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const showSidebar = () => {
    setSidemenu(true);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderDesktop>
          <div>
            <LogoLiteflix />
            <AddMovieButton />
          </div>

          <div>
            <button onClick={showSidebar}>
              <MenuDesktopIcon />
            </button>
            <NotificationBellIcon />
            <ProfileIcon />
          </div>
        </HeaderDesktop>

        <HeaderMobile>
          <button onClick={showSidebar}>
            <MenuMobileIcon />
          </button>
          <LogoLiteflix />
          <ProfileIcon />
        </HeaderMobile>
      </HeaderContainer>
      {sidemenu && <Menu setMenu={setSidemenu} />}
    </>
  );
};
