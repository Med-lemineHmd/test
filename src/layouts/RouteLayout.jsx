import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const RouteLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouteLayout;
