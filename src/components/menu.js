import React from "react";
import { MenuContainer, ButtonClose } from "../styles/menu-container";
import { AddMovieButton } from "../utils/add-movie-button";
import {
  ProfileIcon,
  NotificationBellIcon,
  CloseIcon,
} from "../utils/icons/icons";
export const Menu = ({ setMenu }) => {
  const handleCancelClick = () => {
    setMenu(false);
  };
  return (
    <>
      <MenuContainer>
        <nav>
          <div>
            <ButtonClose onClick={handleCancelClick}>
              <CloseIcon />
            </ButtonClose>
            <div>
            <NotificationBellIcon />
            <ProfileIcon />
            </div>
          </div>
          <ul>
            <li>Inicio </li>
            <li>Series </li>
            <li>Peliculas</li>
            <li>Agregadas Recientemente </li>
            <li>Populares</li>
            <li>Mis peliculas</li>
            <li>Mi lista</li>
            <AddMovieButton/>
            <li>Cerrar Sesion</li>
          </ul>
        </nav>
      </MenuContainer>
    </>
  );
};
