import NavBar from "./NavBar";

import profilePic from "../assets/personal-picture-NOBG.png";

export default function Header() {
  return (
    <>
      <NavBar />
      <main id="main-header">
        <div className="header-content">
          <img src={profilePic} alt="profilePicture" />
          <div className="main-text-content">
            <h1>
              Frontend <span id="react-word">React</span> Developer 👋
            </h1>
            <p>
              Hi! Im Teodor Smilevski, a passionate frontend developer skilled
              in creating interactive and user-friendly web experiences
            </p>
            <div className="link-logos">
              <a href="https://www.linkedin.com/in/teodor-smilevski-21860221b/">
                <i className="bx bxl-linkedin-square bx-md icon-w"></i>
              </a>
              <a href="https://github.com/teodorSmilevski">
                <i className="bx bxl-github bx-md icon-w"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
