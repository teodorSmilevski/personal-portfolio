import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import gitLogo from "../assets/git.png";

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo, gitLogo];
export default function Technologies() {
  return (
    <section id="technologies">
      {logos.map((e) => (
        <img src={e} key={e} alt={e.slice(12)} />
      ))}
    </section>
  );
}
