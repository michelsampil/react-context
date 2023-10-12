import { useContext } from "react";

import AuthContext from "../../stores/auth-context";
import classes from "./Navigation.module.css";
import PropTypes from "prop-types";

const Navigation = ({ onLogout }) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onLogout: PropTypes.func,
};

export default Navigation;
