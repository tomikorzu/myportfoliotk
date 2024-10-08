import { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import allData from "../utils/variables.js";
import EducationExperienceCard from "../components/EducationExperienceCard.jsx";

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
        <div>
          <h3>My Skills</h3>
          <div>
            <h5>Programming Languages</h5>
            <ul className="programming-languages">
              {allData[1].languages.map((language, index) => {
                return <li key={index}>{language}</li>;
              })}
            </ul>
          </div>
          <div>
            <h5>Programming Libraries</h5>
            <ul className="programming-libraries">
              {allData[1].libraries.map((library, index) => {
                return <li key={index}>{library}</li>;
              })}
            </ul>
          </div>
          <div>
            <h5>Programming Frameworks</h5>
            <ul className="programming-frameworks">
              {allData[1].frameworks.map((framework, index) => {
                return <li key={index}>{framework}</li>;
              })}
            </ul>
          </div>
          <div>
            <h5>Tools</h5>
            <ul className="programming-tools">
              {allData[1].tools.map((tools, index) => {
                return <li key={index}>{tools}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            {allData[2].map((card, index) => {
              return <EducationExperienceCard key={index} data={card} />;
            })}
          </div>
          <div>
            <h2>Experience</h2>
            {allData[3].map((card, index) => {
              return <EducationExperienceCard key={index} data={card} />;
            })}
          </div>
          <div>
            <h2>Links</h2>
          </div>
          <div>
            <h2>certifications</h2>
          </div>
          <div>
            <h2>Projects</h2>
          </div>
          <div>
            <h2>personal data</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
