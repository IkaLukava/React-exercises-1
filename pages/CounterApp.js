import React, { useState } from "react";
import CounterButton from "../components/CounterButton";

const CounterApp = () => {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <CounterButton className="plus" handleOnClick={handleIncrease} text="+" />
      <CounterButton
        className="minus"
        handleOnClick={handleDecrease}
        text="-"
      />
      <CounterButton className="zero" handleOnClick={handleReset} text="C" />

      <p className="quantity"> {count} </p>
    </div>
  );
};

export default CounterApp;
