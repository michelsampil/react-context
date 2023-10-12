import classes from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ type, className, onClick, disabled, children }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
