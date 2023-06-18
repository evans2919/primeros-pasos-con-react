import PropTypes from "prop-types";

const MyButton = ({ title, number }) => {
  const handleClick = (title, number) => {
    console.log("Haz hecho clic en: " + title + " " + number);
  };
  return (
    <button onClick={() => handleClick(title, number)}>
      {title} {number}
    </button>
  );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default MyButton;
