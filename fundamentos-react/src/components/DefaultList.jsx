import PropTypes from "prop-types";

const DefaultList = ({ list }) => (
  <ul>
    {list.map((list, index) => (
      <li key={index}> {list}</li>
    ))}
  </ul>
);

DefaultList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DefaultList;
