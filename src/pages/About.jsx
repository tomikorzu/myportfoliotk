import { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import allData from "../utils/variables.js";
import { goToExternalPage } from "../utils/mainFunctions.js";
import EducationExperienceCard from "../components/EducationExperienceCard.jsx";
import "../assets/styles/about.css";

const About = () => {
  useEffect(() => {
    const aboutMe = allData[0];
    document.getElementById("about-me-text").textContent = aboutMe.aboutMe;
    document.getElementById("objective-professional-text").textContent =
      aboutMe.professionalObjective;
  }, []);
  return (
    <>
      <div className="fade-in">
        <NavbarMenu
          items={[
            { item: "Home", url: "/" },
            { item: "About", url: "/about", active: true },
            { item: "Projects", url: "/projects" },
            { item: "Contact", url: "/contact" },
          ]}
        />
        <main className="about-container">
          <h1 className="about-title">About Me</h1>
          <section className="about-text-container">
            <article>
              <h3>How I am</h3>
              <p id="about-me-text"></p>
            </article>
            <article>
              <h3>My Professional objective</h3>
              <p id="objective-professional-text"></p>
            </article>
          </section>
          <section className="about-skills-container">
            <h2>My Skills</h2>
            <article>
              <h3>Programming skillset</h3>
              <ul>
                {allData[1].languages.map((language, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => goToExternalPage(language.url)}
                    >
                      {language.img && (
                        <img src={language.img} alt="Language" />
                      )}
                      <p>{language.name}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
            <article>
              <h3>Tools I use</h3>
              <ul>
                {allData[1].tools.map((tool, index) => {
                  return (
                    <li key={index} onClick={() => goToExternalPage(tool.url)}>
                      {tool.img && <img src={tool.img} alt="Tool" />}
                      <p>{tool.name}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          </section>
          <section className="about-personal-container">
            <article>
              <h2>Education</h2>
              {allData[2].map((card, index) => {
                return <EducationExperienceCard key={index} data={card} />;
              })}
            </article>
            <article>
              <h2>Experience</h2>
              {allData[3].map((card, index) => {
                return <EducationExperienceCard key={index} data={card} />;
              })}
            </article>
          </section>
          {/* <div>
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
          </div> */}
        </main>
      </div>
    </>
  );
};

export default About;
