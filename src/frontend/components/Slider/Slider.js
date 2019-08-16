import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ text, onArrowClick }) => {
  const handleButtonClick = event => {
    event.preventDefault();
    onArrowClick();
  };
  return (
    <div>
      Slider component
      <div>{text}</div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

Slider.propTypes = {
  text: PropTypes.string.isRequired,
  onArrowClick: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  text: '',
  onArrowClick: () => console.log('clicked'),
};

export default Slider;
