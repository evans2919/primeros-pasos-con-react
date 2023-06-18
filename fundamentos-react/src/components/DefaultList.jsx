import PropTypes from "prop-types";

const DefaultList = ({ list }) => {
  return (
    <ul>
      {list.map((list, index) => (
        <li key={index}> {list} </li>
      ))}
    </ul>
  );
};

DefaultList.propTypes = {
  list: PropTypes.string.isRequired,
};

export default DefaultList;