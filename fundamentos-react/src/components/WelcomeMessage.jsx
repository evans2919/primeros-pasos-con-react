import PropTypes from "prop-types";

const WelcomeMessage = ({ user }) => (
  <h3>{user ? "User Online" : "User Offline"}</h3>
);

WelcomeMessage.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default WelcomeMessage;
