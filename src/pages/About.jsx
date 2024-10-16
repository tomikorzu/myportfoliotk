import { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import allData from "../utils/variables.js";
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
              <h3>Programming Languages</h3>
              <ul className="programming-languages">
                {allData[1].languages.map((language, index) => {
                  return <li key={index}><img src={language} alt="Language" /></li>;
                })}
              </ul>
            </article>
            <article>
              <h3>Programming Libraries</h3>
              <ul className="programming-libraries">
                {allData[1].libraries.map((library, index) => {
                  return <li key={index}><img src={library} alt="Library" /></li>;
                })}
              </ul>
            </article>
            <article>
              <h3>Programming Frameworks</h3>
              <ul className="programming-frameworks">
                {allData[1].frameworks.map((framework, index) => {
                  return <li key={index}><img src={framework} alt="Framework" /></li>;
                })}
              </ul>
            </article>
            <article>
              <h3>Tools</h3>
              <ul className="programming-tools">
                {allData[1].tools.map((tools, index) => {
                  return <li key={index}><img src={tools} alt="Tool" /></li>;
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
