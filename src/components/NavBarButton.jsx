import PropTypes from "prop-types";

export default function NavBarButton({ name, onClickBtn, style }) {
  return (
    <button id={style} onClick={onClickBtn}>
      {name}
    </button>
  );
}

NavBarButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
};
