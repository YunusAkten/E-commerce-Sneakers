import { Link } from "react-router-dom";
import React from "react";
import { NavbarStyle } from "./styles/NavbarStyle";
function BasicNavbar() {
  return (
    <NavbarStyle>
      <div id="logo">
        <Link to="/">Sneakears4All</Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </NavbarStyle>
  );
}
export default BasicNavbar;
