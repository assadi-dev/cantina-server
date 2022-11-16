import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./Layout.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/">
        <span className="title">CANTINA</span>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
