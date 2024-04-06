import PropTypes from "prop-types";

export default function Contact({ isActive }) {
  return (
    <div className={isActive ? "contact" : "undefined"}>
      <div id="contact-form">
        <h1>Send a message!</h1>
        <h3>teosmilevski@outlook.com</h3>
        {/* <form action="">
        <input type="email" />
        <input type="text" placeholder="Subject" />
        
        <input type="text" placeholder="Your text..." />
    </form> */}
      </div>
    </div>
  );
}
Contact.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
