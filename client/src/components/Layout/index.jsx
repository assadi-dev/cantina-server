import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainView } from "./Layout.styled";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />

      <MainView>
        {" "}
        <Outlet />
      </MainView>
    </LayoutWrapper>
  );
};

export default Layout;
