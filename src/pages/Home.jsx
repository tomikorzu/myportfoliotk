import "../assets/styles/home.css";
import NavbarMenu from "../components/NavbarMenu.jsx";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <div className="back-drop">
        <NavbarMenu
          items={[
            { item: "", url: "/" },
            { item: "", url: "/" },
          ]}
        />
        <main className="fade-in"></main>
      </div>
    </>
  );
};
export default Home;
