import React from "react";

const SetTime = () => {
    return(
        <div id="setTime" className="container-fluid input-group mb-5">
            <span className="input-group-text bg-dark border-dark text-white">Hours</span>
            <input type="number" className="form-control col-1" placeholder="hh" min={0} max={23} aria-label="Hours"></input>
            <span className="input-group-text bg-dark border-dark text-white">Minutes</span>
            <input type="number" className="form-control col-1" placeholder="hh" min={0} max={60} aria-label="Hours"></input>
            <span className="input-group-text bg-dark border-dark text-white">Seconds</span>
            <input type="number" className="form-control col-1" placeholder="hh" min={0} max={60} aria-label="Hours"></input>
        </div>
    )
}

export default SetTime;