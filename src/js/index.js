//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";

//render your react application
let seconds = 3550;
let grados = 0;

setInterval(() => {
    ReactDOM.render(<Home digits={actualTime()} seconds={seconds}/>, document.querySelector("#app"));
    let secundero = document.getElementById("secundero");
    /*secundero.style.rotate = `${grados}deg`
    transformToDigits(seconds)*/
    seconds++;
    if (seconds === 100000000) seconds = 0;
    grados += 6;
    if (grados === 360) grados = 0;
} ,1000)

function transformToDigits (parameterSeconds){
    // transform all seconds into digits. 
    let digits = [];
    if (parameterSeconds === 0) digits.unshift(0)
    for (let i=parameterSeconds; i !== 0; i=Math.floor(i/10)){
        digits.unshift(i % 10);
    }
    return digits;
}
function chronometer (parameterSeconds){
    let time = [0,0,10,0,0,10,0,0];
    let sec = parameterSeconds % 60;
    let minutes = Math.floor(parameterSeconds/60) % 60;
    let hours = Math.floor(parameterSeconds/3600);

    if (hours === 100) hours=0
    time[7] = sec % 10;
    time[6] = Math.floor(sec / 10);
    time[4] = minutes % 10;
    time[3] = Math.floor(minutes / 10);
    time[1] = hours % 10;
    time[0] = Math.floor(hours / 10);

    return time;
}

function actualTime (){
    const date = new Date();
    let time =  [(Math.floor(date.getHours()/10)),
                (date.getHours() % 10), 
                10,
                (Math.floor(date.getMinutes()/10)),
                (date.getMinutes() % 10), 
                10,
                (Math.floor(date.getSeconds()/10)),
                (date.getSeconds() % 10)
                ];
    return time;
}