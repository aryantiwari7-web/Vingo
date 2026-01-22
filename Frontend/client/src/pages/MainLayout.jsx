import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/navBar.jsx";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
