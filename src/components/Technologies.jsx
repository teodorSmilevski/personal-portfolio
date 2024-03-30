import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import gitLogo from "../assets/git.png";
export default function Technologies() {
  return (
    <section id="technologies">
      {/* TODO: MAKE CHANGES HERE 
      PUT 5 ICONS
      CHANGE COLOR - PURPLE??? */}
      <img src={htmlLogo} alt="html ogo" />
      <img src={cssLogo} alt="css logo" />
      <img src={jsLogo} alt="js logo" />
      <img src={reactLogo} alt="react logo" />
      <img src={gitLogo} alt="git logo" />
    </section>
  );
}
