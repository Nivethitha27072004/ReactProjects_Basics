import React, { useState } from 'react'

function RandomColor() {
    const [type, setType] = useState('hex');
    const [color,setColor]=useState("#000000")


    function randomColorGenerator(length) {
        
        return Math.floor(Math.random() * length);
    }



    function handleHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = "#";

        for (let i = 0; i < 6; i++){
            hexColor += hex[randomColorGenerator(hex.length)];
              
        }

        setColor(hexColor);
        
   }
   
    function handleRgbColor() {

        const r = randomColorGenerator(256);
        const g = randomColorGenerator(256);
        const b = randomColorGenerator(256);
        
         
        setColor(`rgb(${r},${g},${b})`);
    }
    console.log(color);
    return (
      <>
        <button
          onClick={() => {
            setType(color);
          }}
        >
          hex Color
        </button>

        <button onClick={type === "hex" ? handleHexColor : handleRgbColor}>
          Genrate random color
        </button>

        <button
          onClick={() => {
            setType(color);
          }}
        >
          rgb color
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "60px", color: "white", matginTop: "50px" }}><h4>{color}</h4></div>

        <div
          style={{ width: "100vw", height: "100vh", background: color }}
        ></div>
        <div className="container"></div>
      </>
    );
}

export default RandomColor