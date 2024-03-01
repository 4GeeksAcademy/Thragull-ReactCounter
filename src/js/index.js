//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";

// Set global variables

let seconds = 0;
let active = ["active","","","",""];
let digital = true;
let chronoPlay = false;
let alarmSet = false;
let decimals = 0;
let alarmActive = false;

//render your react application

ReactDOM.render(<Home digits={transformToDigits(seconds)} digital={digital} active={active}/>, document.querySelector("#app"));

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

// Given an array wich contains the time in Month, Day, Hours, Minutes and seconds
// the following function returns an array that will store the degrees that the relevant
// watch handle images need to rotate.
// The order in the array is the same as the entry array.
function transformToDegrees (timeArray){

    let degrees = [0, 0, 0, 0, 0];

    degrees[0] = timeArray[0] * 30;
    degrees[1] = timeArray[1] * 12;
    degrees[2] = timeArray[2] * 30;
    degrees[3] = timeArray[3] * 6;
    degrees[4] = timeArray[4] * 6;

    return degrees
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
function actualTimeDigital (){
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

// The following function gets the actual real time and stores it in an array in the same format 
// of the transformToDegrees function.
function actualTimeAnalog (){
    const date = new Date();
    let time =  [
                date.getMonth()+1,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            ];
    return time;
}

// This function transforms a given time in hours, minutes and seconds into seconds
function timeToSeconds (hours, minutes, seconds){
    return (hours*60*60+minutes*60+seconds)
}

// This function transforms a given time in seconds into Hours, minutes and Seconds
// and return the data as an array with the following format:
// Present Month, Present Day, Hours from the given time, Minutes from the given time and seconds from the given time
function secondsToTime (seconds){
    const date = new Date();
    let time =  [
                date.getMonth()+1,
                date.getDate(),
                Math.floor(Math.floor(seconds/60) / 60) % 12,
                Math.floor(seconds/60) % 60,
                seconds%60
            ];

    return time;
}

// The following function renders the analogic watch and all its components.
// To do that it receives the array with the relevant degrees and uses the decimals variable to show the handles movement 
// more accurate and fluid
function renderHandles (degreesArray, decimals) {
    let mes = document.getElementById("monthHandle");
    let dia = document.getElementById("dayHandle");
    let secundero = document.getElementById("secondHandle");
    let minutero = document.getElementById("minuteHandle");
    let hora = document.getElementById("hourHandle");

    secundero.style.rotate = `${degreesArray[4]+(0.6*decimals)}deg`;
    minutero.style.rotate = `${degreesArray[3]+(6/360*degreesArray[4])}deg`;
    hora.style.rotate = `${degreesArray[2]+(30/360*(degreesArray[3]+(6/360*degreesArray[4])))}deg`;
    dia.style.rotate = `${degreesArray[1]}deg`;
    mes.style.rotate = `${degreesArray[0]}deg`;   
}

// This function gets the actual decimals of second in order to solve a problem with the movement of the second
// handle in the Analogic Watch
function setActualDecimals () {
    const date = new Date();

    return Math.floor(date.getMilliseconds()/100)
}

// The following logic will create the events to navigate along the site.
// First we get the elements from the HTML that will select each section
let secondCounter = document.getElementById("counter");
let chrono = document.getElementById("chrono");
let countdown = document.getElementById("countdown");
let clock = document.getElementById("clock");
let alarm = document.getElementById("alarm");

// Now we create the listeners that will listen to the relevant action and select the function to 
// be executed. 
secondCounter.addEventListener("click", counterSelected);
chrono.addEventListener("click", chronoSelected);
countdown.addEventListener("click", countdownSelected);
clock.addEventListener("click", clockSelected);
alarm.addEventListener("click", alarmSelected);

// We create the functions that will select each section by setting the class "active" in the relevant element of the array active
function counterSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[0]="active";
    restartControls();
}
function chronoSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[1]="active";
    restartControls();
}
function countdownSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[2]="active";
    restartControls();
}
function clockSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[3]="active";
    restartControls();
}
function alarmSelected() {
    active.forEach((element, index) => { if (element==="active") active[index]=""});
    active[4]="active";
    restartControls();
}

// The following functions are asociated to the controls of the diferent sections of the site. 

// RestartCounter mainly restarts the second counter to 0 seconds.
function restartCounter() {
    seconds=0;
    decimals=0;
}

// This function restarts the chronometer to 0 and if it was playing, it will also stop it.
function restartChronometer() {
    let button = document.getElementById("play-pause")
    
    button.classList.replace("btn-danger", "btn-secondary")
    button.innerHTML= `<i class="fa-solid fa-play"></i>`;
    chronoPlay = false
    seconds=0;
    decimals=0;
}

// The following function starts the chronometer if it was in pause and pauses it if it was playing. 
function startChrono() {
    let button = document.getElementById("play-pause")
    
    if (chronoPlay) {
        button.classList.replace("btn-danger", "btn-secondary")
        button.innerHTML= `<i class="fa-solid fa-play"></i>`;
        chronoPlay = false
    }
    else {
        button.classList.replace("btn-secondary", "btn-danger")
        button.innerHTML= `<i class="fa-solid fa-pause"></i>`;
        chronoPlay = true
    }
}

// This function stablishes the time you want for the countdown
function setTimer (){
    let setHours = document.getElementById("hour").valueAsNumber
    let setMinutes = document.getElementById("minute").valueAsNumber
    let setSeconds = document.getElementById("second").valueAsNumber
    let btnSetAlarm = document.getElementById("btnSetTime")
    let hours = 0
    let minutes = 0
    let secs = 0;

    if (! isNaN(setHours)) hours = setHours
    if (! isNaN(setMinutes)) minutes= setMinutes
    if (! isNaN(setSeconds)) secs= setSeconds

    if (alarmSet){
        btnSetAlarm.classList.replace("btn-danger","btn-success")
        btnSetAlarm.textContent="Set"
        alarmSet=false;
    }
    else{
        btnSetAlarm.classList.replace("btn-success","btn-danger")
        alarmSet=true;
        btnSetAlarm.textContent="Unset"
        seconds=timeToSeconds(hours, minutes, secs)
    }
}

// The following function restarts the countdown timer and stops it if it was playing
function restartTimer() {
    let button = document.getElementById("play-pause")
    
    button.classList.replace("btn-danger", "btn-secondary")
    button.innerHTML= `<i class="fa-solid fa-play"></i>`;
    chronoPlay = false
    setTimer();
}

// This function stablishes an alarm time if there is no time set 
// If there is, it unsets the alarm. 
function setAlarm (){
    let btnSetAlarm = document.getElementById("btnSetTime")
    let setHours = document.getElementById("hour").valueAsNumber
    let setMinutes = document.getElementById("minute").valueAsNumber
    let setSeconds = document.getElementById("second").valueAsNumber
    let hours = 0
    let minutes = 0
    let secs = 0;

    if (! isNaN(setHours)) hours = setHours
    if (! isNaN(setMinutes)) minutes= setMinutes
    if (! isNaN(setSeconds)) secs= setSeconds

    if (alarmSet){
        btnSetAlarm.classList.replace("btn-danger","btn-success")
        btnSetAlarm.textContent="Set"
        alarmSet=false;
    }
    else{
        btnSetAlarm.classList.replace("btn-success","btn-danger")
        alarmSet=true;
        btnSetAlarm.textContent="Unset"
        seconds=timeToSeconds(hours, minutes, secs)
    }
}

// This function will restart all controls every time we change section
function restartControls () {
    let btnSetAlarm = document.getElementById("btnSetTime")
    let button = document.getElementById("play-pause")

    if (alarmSet){
        btnSetAlarm.classList.replace("btn-danger","btn-success")
        btnSetAlarm.textContent="Set"
    }
    if (chronoPlay) {
        button.classList.replace("btn-danger", "btn-secondary")
        button.innerHTML= `<i class="fa-solid fa-play"></i>`;
    }
    decimals = 0;
    seconds = 0;
    alarmActive = false;
    alarmSet=false;
    chronoPlay = false;
}

// This function will show up the visual alarm and will also start playing the alarm sound
function launchAlarm () {
    let alarmAlert = document.getElementById("alarmAlert")
    
    alarmAlert.classList.add("show")
    alarmAlert.style.display="inline-block";
    playAlarm();
    alarmActive = true;
}

// This function contains the event listeners to close the alarm.
function closeModal () {
    let closeButton = document.getElementById("alarmOff")
    let turnOffButton = document.getElementById("alarmSwitchOff")
    
    closeButton.addEventListener("click", turnAlarmOff)
    turnOffButton.addEventListener("click", turnAlarmOff)
}

// This function will be called from the event listeners of the modal buttons to close the alarm. 
// It closes the alarm window and at the same time switches off the sound.
function turnAlarmOff () {
    let alarmAlert = document.getElementById("alarmAlert")
    let btnSetAlarm = document.getElementById("btnSetTime")
    
    alarmAlert.classList.remove("show")
    alarmAlert.style.display="none";

    btnSetAlarm.classList.replace("btn-danger","btn-success")
    alarmSet=false;
    stopAlarm();
    alarmActive=false;
}

// This function starts the sound of the alarm
function playAlarm () {
    let audio = document.getElementById("alarmSound")

    audio.play();
}

// This function stops the sound of the alarm
function stopAlarm () {
    let audio = document.getElementById("alarmSound")

    audio.pause();
}

// The function setInterval renders the site every 0.1 seconds. The reason to do that instead of 1 second is to make
// the interface more fluid, specially with the event listeners, as otherwise it may happen that we press the button to stop 
// 1 milisecond after rendering and it passes 1 full second before it actually stops the chronometer for example. 
// This also gives the impression to the Analogic Watch to move the handles in a more fluid way.

// Inside the setInterval function we have all the logic to render each part of the site according to the relevant selections and functions
setInterval(() => {
    let watchSelector = document.getElementById("watchSelector");

    if (watchSelector.value === "digital") digital=true;
    else digital = false;

    if (active[0]==="active"){
        ReactDOM.render(<Home digits={transformToDigits(seconds)} digital={digital} active={active}/>, document.querySelector("#app"));
        let restart = document.getElementById("restart");
        restart.addEventListener("click", restartCounter)
        decimals++;
        if (decimals === 10){
            decimals = 0;
            seconds++;
            if (seconds === 100000000) seconds = 0;
        }
        if (!digital) renderHandles(transformToDegrees(secondsToTime(seconds)), decimals)
        
    }
    if (active[1]==="active"){
        ReactDOM.render(<Home digits={chronometer(seconds)} digital={digital} active={active}/>, document.querySelector("#app"));
        let restartChrono = document.getElementById("restartChrono");
        let playChrono = document.getElementById("play-pause")
        restartChrono.addEventListener("click", restartChronometer)
        playChrono.addEventListener("click", startChrono)

        if (!digital) renderHandles(transformToDegrees(secondsToTime(seconds)), decimals)

        if (chronoPlay) {
            decimals++;
            if (decimals === 10){
                decimals = 0;
                seconds++;
            } 
        }
    }
    if (active[2]==="active"){
        ReactDOM.render(<Home digits={chronometer(seconds)} digital={digital} active={active}/>, document.querySelector("#app"));

        let setTime = document.getElementById("btnSetTime")
        let restartChrono = document.getElementById("restartChrono");
        let playChrono = document.getElementById("play-pause")
        
        restartChrono.addEventListener("click", restartTimer)
        playChrono.addEventListener("click", startChrono)
        setTime.addEventListener("click", setTimer)

        if (!digital) renderHandles(transformToDegrees(secondsToTime(seconds)), decimals)
        
        if (chronoPlay && (seconds >0)) {
            if (decimals === 0){
                decimals = 10;
                seconds--;
            }
            decimals--
        }
        else if (chronoPlay && seconds ===0 && decimals > 0){
            decimals--
        }
        else if (chronoPlay) {
            restartTimer();
            launchAlarm ();
        }
        if (alarmActive) closeModal();
    }
    if (active[3]==="active"){
        ReactDOM.render(<Home digits={actualTimeDigital()} digital={digital} active={active}/>, document.querySelector("#app"));
    
        decimals = setActualDecimals();

        if (!digital) renderHandles(transformToDegrees(actualTimeAnalog()), decimals)
    }
    if (active[4]==="active"){
        ReactDOM.render(<Home digits={actualTimeDigital()} digital={digital} active={active}/>, document.querySelector("#app"));
        
        decimals= setActualDecimals()

        if (!digital) renderHandles(transformToDegrees(actualTimeAnalog()), decimals)

        let setTime = document.getElementById("btnSetTime")

        setTime.addEventListener("click", setAlarm)
        if (alarmSet && (chronometer(seconds).toString() === actualTimeDigital().toString())) {
            setAlarm()
            launchAlarm();

        }
        if (alarmActive) closeModal();
    }
} ,100)