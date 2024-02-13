//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";

//render your react application
let seconds = 0;
let grados = 0;

setInterval(() => {
    ReactDOM.render(<Home digits={transformToDigits(seconds)} seconds={seconds}/>, document.querySelector("#app"));
    let secundero = document.getElementById("secundero");
    /*secundero.style.rotate = `${grados}deg`*/
    seconds++;
    if (seconds === 100000000) seconds = 0;
    grados += 6;
    if (grados === 360) grados = 0;
} ,1000)

function transformToDigits (seconds){
    // transform all seconds into digits. 
    let aux = [];
    if (seconds === 0) aux.unshift(0)
    for (let i=seconds; i !== 0; i=Math.floor(i/10)){
        aux.unshift(i % 10);
    }
    return aux;
}