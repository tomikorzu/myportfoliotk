import "../assets/styles/home.css";
import NavbarMenu from "../components/NavbarMenu.jsx";
import React, { useEffect, useState } from "react";
import myPhoto from "../assets/img/me.jpeg";
import { redirectPage } from "../utils/mainFunctions.js";

const Home = () => {
  useEffect(() => {
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => redirectPage('/projects', 'fade-out', 500));
  }, []);
  return (
    <>
      <div className="back-drop fade-in">
        <NavbarMenu
          items={[
            { item: "Home", url: "/", active: true },
            { item: "About Me", url: "/About" },
            { item: "Projects", url: "/Projects" },
            { item: "Contact", url: "/Contact" },
          ]}
        />
        <main>
          <div className="home-container">
            <div className="left-part">
              <img className="my-photo" src={myPhoto} alt="me" />
            </div>
            <div className="right-part">
              <h1 className="home-title">Tomás Korzusehec</h1>
              <h4 className="home-subtitle">Front End Developer</h4>
              <button className="home-btn" id="home-btn">
                My Projects
              </button>
            </div>
          </div>
        </main>
        <footer className="copyright-footer">
          © 2024, Designed by Tomás Korzusehec
        </footer>
      </div>
    </>
  );
};
export default Home;
