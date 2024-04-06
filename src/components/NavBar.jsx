import logo from "../assets/logo-ts-green.png";
import NavBarButton from "./NavBarButton";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  function handleBtnClick() {
    setIsActive((oldValue) => !oldValue);
  }

  return (
    <>
      <div id="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="ts logo" />
        </div>
        <div className="navbar-links">
          <NavBarButton name="Contact" onClickBtn={handleBtnClick} />
        </div>
      </div>
      <div className={isActive ? "contact" : "contact-off"}></div>
    </>
  );
}
