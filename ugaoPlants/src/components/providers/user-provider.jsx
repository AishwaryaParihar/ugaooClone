import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";

const UserProvider = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserProvider;
