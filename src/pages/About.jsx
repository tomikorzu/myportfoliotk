import NavbarMenu from "../components/NavbarMenu";

const About = () => {
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
        <div className="about-container">
          <div className="about-left">
            <h2>Tomás Korzusehec</h2>
            <p>
              I am a Front End Developer with a passion for creating beautiful
              and functional websites. I have experience with HTML, CSS,
              JavaScript, React, and Node.js. I am always looking to learn new
              things and improve my skills.
            </p>
          </div>
          <div className="about-right">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
