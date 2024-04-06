import PropTypes from "prop-types";

export default function NavBarButton({ name, onClickBtn }) {
  return (
    <button id="navbar-btn" onClick={onClickBtn}>
      {name}
    </button>
  );
}

NavBarButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
