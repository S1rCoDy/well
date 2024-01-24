import React, { useState } from 'react';
import './Whell.css';

function Whell() {
  const [rotation, setRotation] = useState(0);
  const [text, setText] = useState(["", "", "", "", "", "", "", "", "", ""]);

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
        {text.map((part, index) =>{
          return <div key={index+"spin"} style={{ backgroundColor: index %2 === 0? "#baf4ee": "#fff", transform: `rotate(${index !== 0 ? 360/text.length*index : 0}deg)` , borderColor: "red", borderWidth: "1px"}} ></div>
        })}
       
      </div>
      <span className="mid"></span>
      <button id="spin" onClick={spin}>Spin</button>
      <div className="stoper"></div>
    </div>
  );
}

export default Whell;
