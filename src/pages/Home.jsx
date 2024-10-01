import "../assets/styles/home.css";
import NavbarMenu from "../components/NavbarMenu.jsx";
import React, { useEffect, useState } from "react";
import myPhoto from "../assets/img/me.jpeg";
import { redirectPage, goToExternalPage } from "../utils/mainFunctions.js";

const Home = () => {
  useEffect(() => {
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () =>
      redirectPage("/about", "fade-out", 500)
    );
    const linkedinLinkBtn = document.getElementById("linkedin-btn");
    linkedinLinkBtn.addEventListener("click", () =>
      goToExternalPage("https://www.linkedin.com/in/tomas-korzusehec/")
    );
    const githubLinkBtn = document.getElementById("github-btn");
    githubLinkBtn.addEventListener("click", () =>
      goToExternalPage("https://github.com/tomikorzu")
    );
    const mailLinkBtn = document.getElementById("mail-btn");
    mailLinkBtn.addEventListener("click", () => {
      window.location.href = "mailto:tomykorzu@icloud.com";
    });
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
              <div className="btn-container">
                <button className="btn-link" id="github-btn">
                  <i className="fa-brands fa-github"></i>
                </button>
                <button className="btn-link" id="linkedin-btn">
                  <i className="fa-brands fa-linkedin"></i>
                </button>
                <button className="btn-link" id="mail-btn">
                  <i className="fa-solid fa-envelope"></i>
                </button>
              </div>
              <button className="home-btn" id="home-btn">
                About Me
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
