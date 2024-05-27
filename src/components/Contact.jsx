import PropTypes from "prop-types";
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
          <i className="bx bx-envelope bx-md"></i>
          Send an email!
        </button>
        <a
          href="https://www.linkedin.com/in/teodor-smilevski-21860221b/"
          target="_blank"
        >
          <button className="contact-btn msg-btn">
            <i className="bx bxl-linkedin-square bx-md "></i>
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
