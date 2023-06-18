import PropTypes from "prop-types";

const DefaultList = ({list}) => {
  return <li> { list } </li>
}

DefaultList.propTypes = {
    list: PropTypes.string.isRequired,
};

export default DefaultList;