import PropTypes from "prop-types";

export default function NavBarButton({ name }) {
  return <button id="navbar-btn">{name}</button>;
}

NavBarButton.propTypes = {
  name: PropTypes.string.isRequired,
};
