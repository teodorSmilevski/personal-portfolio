import tsLogo from "../assets/logo-ts-white.png";

export default function Footer() {
  return (
    <section id="footer">
      <img src={tsLogo} alt="TS logo" />
      <div>
        <a
          href="https://www.linkedin.com/in/teodor-smilevski-21860221b/"
          target="_blank"
        >
          <i className="bx bxl-linkedin-square bx-md icon-w"></i>
        </a>
        <a href="https://github.com/teodorSmilevski" target="_blank">
          <i className="bx bxl-github bx-md icon-w"></i>
        </a>
      </div>
    </section>
  );
}
