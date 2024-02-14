import React from "react";

const Controls = () =>{
    return (
        <div className="container-fluid row justify-content-center">
            <button className="btn btn-secondary col-6 col-md-4 col-lg-1 mx-md-2">
                <i class="fa-solid fa-backward-fast"></i>
            </button>
            <button className="btn btn-secondary shadow-lg col-6 col-md-4 col-lg-1 mx-md-2">
                <i class="fa-solid fa-play"></i>
            </button>
        </div>
    )
}
export default Controls