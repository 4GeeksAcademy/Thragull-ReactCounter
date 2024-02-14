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
let active = ["active","","","",""];

ReactDOM.render(<Home digits={actualTime()} seconds={seconds} active={active}/>, document.querySelector("#app"));

// This function transforms the given seconds into single digits and store them into an array 
function transformToDigits (parameterSeconds){
    // transform all seconds into digits. 
    let digits = [];
    if (parameterSeconds === 0) digits.unshift(0)
    for (let i=parameterSeconds; i !== 0; i=Math.floor(i/10)){
        digits.unshift(i % 10);
    }
    return digits;
}

// This function transforms the given seconds in hours, minutes and seconds. Then it transforms them into single digits and 
// stores them in an array. It uses the value 10 to separate minutes from seconds and hours. We will use this value to 
// set the : value in the digital watch. 
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

// This function gets the actual real time of your location and separates it in hours, minutes and seconds.
// It transforms them into digits and stores all the information in an array with the same format as previous function.
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

// The following logic will create the events to navigate along the site. options.
// First we get the elements from the HTML that will select each section

let secondCounter = document.getElementById("counter");
let chrono = document.getElementById("chrono");
let countdown = document.getElementById("countdown");
let clock = document.getElementById("clock");
let alarm = document.getElementById("alarm");

secondCounter.addEventListener("click", counterSelected);
chrono.addEventListener("click", chronoSelected);
countdown.addEventListener("click", countdownSelected);
clock.addEventListener("click", clockSelected);
alarm.addEventListener("click", alarmSelected);

// We create the functions that will select each section by setting the class "active" in the relevant element of the array active

function counterSelected() {
    active.forEach((element) => { if (element==="active") element=""});
    active[0]="active";
}
function chronoSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[1]="active";
}
function countdownSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[2]="active";
}
function clockSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[3]="active";
}
function alarmSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[4]="active";
}

// Now we create the event listeners for the site selection.



setInterval(() => {
    ReactDOM.render(<Home digits={actualTime()} seconds={seconds} active={active}/>, document.querySelector("#app"));
    let secundero = document.getElementById("secundero");
    /*secundero.style.rotate = `${grados}deg`
    transformToDigits(seconds)*/
    seconds++;
    if (seconds === 100000000) seconds = 0;
    grados += 6;
    if (grados === 360) grados = 0;
    

} ,1000)