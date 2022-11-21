import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./Layout.styled";

const Navbar = () => {
  const [show, setShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const NAVB_CLASS = [];
  show ? NAVB_CLASS.push("style-scroll-navbar") : NAVB_CLASS;

  return (
    <NavbarWrapper className={NAVB_CLASS.join(" ")}>
      <Link to="/">
        <span className="title">CANTINA</span>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
