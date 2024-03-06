import React, { useState, useEffect } from 'react';
import '../styles/app.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [buttonColor, setButtonColor] = useState('white');
  const [thirdButtonColor, setThirdButtonColor] = useState('white');

  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  }, []);

  useEffect(() => {
    const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomColor2);
    setThirdButtonColor(randomColor2);
  }, []);

  const changeFirstButtonColor = () => {
    const randomButtonColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomButtonColor);
  };

  const changeButtonColor = () => {
    const randomButtonColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setThirdButtonColor(randomButtonColor);
    changeBackgroundColor();
  };

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      <button className='btn' style={{ backgroundColor: buttonColor }} onClick={changeFirstButtonColor}>Change Button Color</button>
      <button className='btn' onClick={ changeBackgroundColor }>Change Background Color</button>
      <button className='btn' style={{ backgroundColor: thirdButtonColor }} onClick={changeButtonColor}>Change All Of Them</button>
    </div>
  );
}

export default App;