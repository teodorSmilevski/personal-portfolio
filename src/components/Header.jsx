import NavBar from "./NavBar";

import profilePic from "../assets/personal-picture-NOBG.png";
import lnLogo from "../assets/ln-logo.png";
import githubLogo from "../assets/github-logo.png";
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
              <img src={lnLogo} alt="linkedin link logo" />
              <img src={githubLogo} alt="github link logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
