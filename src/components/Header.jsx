import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <NavBar />
      <main id="main-header">
        <div className="header-content container">
          <div className="main-text-content">
            <h1>Hello there 👋</h1>
            <p>I am Teodor, a Web Developer looking for new experiences.</p>
            <p className="construction-note">
              🚧 This site is currently under construction. In the meantime,
              feel free to check out my github and linkedin.
              <div className="link-logos">
                <a
                  href="https://www.linkedin.com/in/teodor-smilevski-21860221b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-linkedin-square bx-md icon-w"></i>
                </a>
                <a
                  href="https://github.com/teodorSmilevski"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github bx-md icon-w"></i>
                </a>
              </div>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
