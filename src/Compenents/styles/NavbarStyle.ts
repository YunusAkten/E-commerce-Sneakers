import styled from "styled-components";

export const NavbarStyle = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  & > #logo {
    color: #fff;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
  }
  & > #logo > a {
    color: #fff;
    text-decoration: none;
    margin: auto 0.5rem;
  }
  & > a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin: auto 0.5rem;
  }
`;
