import React, { useState } from 'react';
import './Whell.css';

function Whell() {
  const [rotation, setRotation] = useState(0);
  const [text, setText] = useState(["", "", "", "", "", ""]);

  const spin = () => {
    const number = Math.ceil(Math.random() * 10000);
    setRotation(rotation + number);
  };

  const editText = (index) => {
    const newText = prompt("Введите новый текст:");
    const updatedText = [...text];
    updatedText[index] = newText;
    setText(updatedText);
  };

  return (
    <div className="App">
      <div className="container" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="one" onClick={() => editText(0)}>{text[0]}</div>
        <div className="two" onClick={() => editText(1)}>{text[1]}</div>
        <div className="three" onClick={() => editText(2)}>{text[2]}</div>
        <div className="four" onClick={() => editText(3)}>{text[3]}</div>
        <div className="five" onClick={() => editText(4)}>{text[4]}</div>
        <div className="six" onClick={() => editText(5)}>{text[5]}</div>
      </div>
      <span className="mid"></span>
      <button id="spin" onClick={spin}>Spin</button>
      <div className="stoper"></div>
    </div>
  );
}

export default Whell;
