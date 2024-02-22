import React from "react";

const SetTime = () => {
    return(
        <div className=" mb-3">
            <div id="setTime" className="container-fluid input-group mb-3">
                <span className="input-group-text bg-dark border-dark text-white">Hours</span>
                <input id="hour" type="number" className="form-control col-1" placeholder="hh" min={0} max={23} aria-label="Hours"></input>
                <span className="input-group-text bg-dark border-dark text-white">Minutes</span>
                <input id="minute" type="number" className="form-control col-1" placeholder="hh" min={0} max={60} aria-label="Hours"></input>
                <span className="input-group-text bg-dark border-dark text-white">Seconds</span>
                <input id="second" type="number" className="form-control col-1" placeholder="hh" min={0} max={60} aria-label="Hours"></input>
            </div>
            <button id="btnSetTime" className="container-fluid d-flex justify-content-center btn btn-success col-6 col-md-4 col-lg-2">Set</button>
        </div>
    )
}

export default SetTime;