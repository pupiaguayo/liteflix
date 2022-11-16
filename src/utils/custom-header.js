import React, { useState, useContext } from "react";
import MoviesContext from "../context/movies/movies-context";
import styled, { keyframes } from "styled-components";
import { AddMovieButton } from "./add-movie-button";
import { LogoLiteflix } from "./logo";
import {
  NotificationBellIcon,
  MenuDesktopIcon,
  MenuMobileIcon,
  CloseIcon,
} from "../utils/icons/icons";
import { ButtonCloseMobile } from "../styles/menu-container";
import { UserIcon } from "./profile-icon";
import { Menu } from "../components/menu";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const HeaderContainer = styled.div`
  grid-column: 1/6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
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
    z-index: 100;
  }
`;
export const Header = () => {
  const { modalState } = useContext(MoviesContext);
  const [sidemenu, setSidemenu] = useState(false);
  const showSidebar = () => {
    setSidemenu(true);
  };
  const handleCancelClick = () => {
    setSidemenu(false);
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
            <UserIcon />
          </div>
        </HeaderDesktop>

        <HeaderMobile>
          {modalState || !sidemenu  ? (
            <button onClick={showSidebar}>
              <MenuMobileIcon />
            </button>
          ) : (
            <ButtonCloseMobile onClick={handleCancelClick}>
              <CloseIcon />
            </ButtonCloseMobile>
          )}
          <LogoLiteflix />
          <UserIcon />
        </HeaderMobile>
      </HeaderContainer>
      {sidemenu && <Menu setMenu={setSidemenu} />}
    </>
  );
};
