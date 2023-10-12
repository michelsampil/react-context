import classes from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default Card;
