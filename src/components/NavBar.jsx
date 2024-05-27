import logo from "../assets/logo-ts-green.png";
import NavBarButton from "./NavBarButton";
import Contact from "./Contact";
import { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  function handleBtnClick() {
    setIsActive((oldValue) => !oldValue);
  }

  return (
    <>
      <div id="navbar">
        <div className="nav container">
          <div className="navbar-logo">
            <img src={logo} alt="ts logo" />
          </div>
          <div className="navbar-links">
            <NavBarButton
              name={isActive ? "Back" : "Contact"}
              onClickBtn={handleBtnClick}
              style={isActive ? "navbar-btn-back" : "navbar-btn"}
            />
          </div>
        </div>
      </div>

      <Contact isActive={isActive} />
    </>
  );
}
