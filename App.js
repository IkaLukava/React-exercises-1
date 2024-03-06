import React, { useState } from "react";
import "./styles/app.css";
import CounterApp from "./pages/CounterApp";
import ColorChanger from "./pages/ColorChanger";
import Calculator from "./pages/Calculator";

function App() {
  const [activePage, setActivePage] = useState(0);

  const changeActivePage = (number) => {
    setActivePage(number);
  };

  return (
    <div className="App">
      <button className="btn btn1" onClick={() => changeActivePage(1)}>counter app</button>
      {"   "}
      <button className="btn btn2" onClick={() => changeActivePage(2)}>color changer</button>
      {"   "}
      <button className="btn btn3" onClick={() => changeActivePage(3)}>calculator</button>
      {activePage === 1 && <CounterApp />}
      {activePage === 2 && <ColorChanger/>}
      {activePage === 3 && <Calculator/>}
    </div>
  );
}

export default App;
