import React from "react";
import "../styles/counter_button.css";

const CounterButton = ({ className, handleOnClick, text }) => {
  return (
    <button className={className} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default CounterButton;
