import PropTypes from "prop-types";
import lnLogo from "../assets/ln-logo.png";
import mailLogo from "../assets/mailLogo.png";
export default function Contact({ isActive }) {
  const sendEmail = () => {
    window.open(
      "mailto:teosmilevski@outlook.com?subject=SendMail&body=Description"
    );
  };

  return (
    <div className={isActive ? "contact" : "off"}>
      <div id="contact-form">
        <h1>
          Say <span id="react-word">hello!</span>
        </h1>

        <button className="contact-btn mail-btn" onClick={sendEmail}>
          <img
            src={mailLogo}
            alt="email logo logo"
            style={{ width: "30px", height: "30px" }}
          />
          Send an email!
        </button>
        <a href="https://www.linkedin.com/in/teodor-smilevski-21860221b/">
          <button className="contact-btn msg-btn">
            <img
              src={lnLogo}
              alt="linkedin link logo"
              style={{ width: "30px", height: "30px" }}
            />
            Send a message!
          </button>
        </a>
      </div>
    </div>
  );
}
Contact.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
