import "../assets/styles/home.css";
import NavbarMenu from "../components/NavbarMenu.jsx";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <div className="back-drop">
        <header className="fade-in fixed-header">
          <NavbarMenu
            items={[
              { item: "Home", url: "/", active: true },
              { item: "About Me", url: "/About" },
              { item: "Projects", url: "/Projects" },
              { item: "Contact", url: "/Contact" },
            ]}
          />
        </header>
        <main className="fade-in"></main>
      </div>
    </>
  );
};
export default Home;
