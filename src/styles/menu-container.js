import styled from "styled-components";

const IconsContainer = styled.div``;
const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
`;
const ButtonCloseMobile = styled.button`
  border: none;
  background-color: transparent;
`;
const MenuContainer = styled.div`
  background: rgba(36, 36, 36, 0.6);
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  nav {
    background: rgba(36, 36, 36, 0.9);
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    transition: all ease-in-out 1000ms;
    position: fixed;
    z-index: 999;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0 65px;
      gap: 30px;
    }
    ul {
      padding: 0 80px;
      li {
        padding: 25px 0;
        list-style: none;
        font-weight: 400;
        font-size: 1.375em;
        line-height: 22px;
        letter-spacing: 4px;
        color: #ffff;
        text-transform: uppercase;
      }
    }
  }
  ${IconsContainer}, ${ButtonClose} {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    background-color: #202020;
    nav {
      background-color: #202020;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      div {
        padding: 0 30px;
      }
      ul {
        padding: 0 30px;
        li {
          padding: 20px 0;
        }
      }
    }
  }
`;
export { MenuContainer, ButtonClose, IconsContainer, ButtonCloseMobile };
