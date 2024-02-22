import React from "react";

const Controls = () =>{
    return (
        <div className="container-fluid d-flex justify-content-center">
            <button id="restartChrono" className="btn btn-secondary col-6 col-md-4 col-lg-1 mx-md-2">
                <i className="fa-solid fa-backward-fast"></i>
            </button>
            <button id="play-pause" className="btn btn-secondary shadow-lg col-6 col-md-4 col-lg-1 mx-md-2">
                <i className="fa-solid fa-play"></i>
            </button>
        </div>
    )
}
export default Controls