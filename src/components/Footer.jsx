import tsLogo from "../assets/logo-ts-white.png";
import githubLogo from "../assets/github-logo.png";
import lnLogo from "../assets/ln-logo.png";

export default function Footer() {
  return (
    <section id="footer">
      <img src={tsLogo} alt="TS logo" />
      <div>
        <a href="https://www.linkedin.com/in/teodor-smilevski-21860221b/">
          <img src={lnLogo} alt="linkedin link logo" />
        </a>
        <a href="https://github.com/teodorSmilevski">
          <img src={githubLogo} alt="github link logo" />{" "}
        </a>
      </div>
    </section>
  );
}
