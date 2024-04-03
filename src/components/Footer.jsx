import tsLogo from "../assets/logo-ts-white.png";
import githubLogo from "../assets/github-logo.png";
import lnLogo from "../assets/ln-logo.png";

export default function Footer() {
  return (
    <section id="footer">
      <img src={tsLogo} alt="TS logo" />
      <div>
        <img src={githubLogo} alt="" />
        <img src={lnLogo} alt="" />
      </div>
    </section>
  );
}
