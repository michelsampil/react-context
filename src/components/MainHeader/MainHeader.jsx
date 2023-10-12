import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import PropTypes from "prop-types";

const MainHeader = ({ onLogout }) => {
  return (
    <header className={classes["main-header"]}>
      <h2>✨ Typical Page ✨</h2>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

MainHeader.propTypes = {
  onLogout: PropTypes.func,
};

export default MainHeader;
