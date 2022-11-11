import styled from "styled-components";

export const MenuContainer = styled.div`
  background: rgba(36, 36, 36, 0.6);
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  nav {
    background: rgba(36, 36, 36, 0.9);
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    position: fixed;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0 65px;

      span > *{
    margin-left: 25px;
      }
    }
    ul {
        padding: 0 80px;
      li {
        padding: 30px 0;
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
  @media screen and (max-width: 900px) {
    background: none;
    nav {
      background: rgba(36, 36, 36, 0.9);
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }
`;
