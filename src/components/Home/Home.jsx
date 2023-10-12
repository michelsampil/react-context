import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import PropTypes from "prop-types";

const Home = ({ onLogout }) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

Home.propTypes = {
  onLogout: PropTypes.func,
};

export default Home;
