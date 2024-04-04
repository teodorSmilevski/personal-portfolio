import logo from "../assets/logo-ts-green.png";
import NavBarButton from "./NavBarButton";
export default function NavBar() {
  return (
    <div id="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ts logo" />
      </div>
      <div className="navbar-links">
        <NavBarButton name="Contact" />
      </div>
    </div>
  );
}
