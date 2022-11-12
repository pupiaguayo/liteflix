import React, { useState } from "react";
import { HeaderContainer } from "../styles/header-container";
import { AddMovieButton } from "../utils/add-movie-button";
import {
  NotificationBellIcon,
  MenuDesktopIcon,
  MenuMobileIcon,
  ProfileIcon,
} from "../utils/icons/icons";
import { Menu } from "./menu";
export const Header = () => {
  const [sidemenu, setSidemenu] = useState(false);

  const showSidebar = () => {
    setSidemenu(true);
  };

  return (
    <HeaderContainer>
      <div>
        <h1>
          <span>LITE</span>FLIX
        </h1>
        <AddMovieButton />
      </div>

      <div>
        <button onClick={showSidebar}>
          <MenuDesktopIcon onClick={showSidebar} />
        </button>
        {sidemenu && <Menu setMenu={setSidemenu} />}
        <NotificationBellIcon />
        <ProfileIcon />
      </div>
    </HeaderContainer>
  );
};
