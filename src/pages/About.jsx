import { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import { allData } from "../utils/variables.js";

const About = () => {
  useEffect(() => {
    const aboutMe = allData[0];
    document.getElementById("about-me-text").textContent = aboutMe.aboutMe;
    document.getElementById("objective-professional-text").textContent =
      aboutMe.professionalObjective;
  }, []);
  return (
    <>
      <div className="back-drop fade-in">
        <NavbarMenu
          items={[
            { item: "Home", url: "/" },
            { item: "About", url: "/about", active: true },
            { item: "Projects", url: "/projects" },
            { item: "Contact", url: "/contact" },
          ]}
        />
        <h1>About Me</h1>
        <div>
          <h3>How I am</h3>
          <h5 id="about-me-text"></h5>
        </div>
        <div>
          <h3>My Professional objective</h3>
          <h6 id="objective-professional-text"></h6>
        </div>
      </div>
    </>
  );
};

export default About;
