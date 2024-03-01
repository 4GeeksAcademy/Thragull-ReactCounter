import React from "react";

const AlertAlarm = () => {
    return(
        <div id="alarmAlert" className="modal fade" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-heyboard="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h5 className="modal-title">TIME TO WAKE UP!!!!!</h5>
                        <button id="alarmOff" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        <img className="w-100 p-0" src="https://i.pinimg.com/originals/27/c2/e5/27c2e5684d9758ee61d5e0e516d05ec6.gif" />
                    </div>
                    <div className="modal-footer bg-warning">
                        <button id="alarmSwitchOff" type="button" className="btn btn-danger" data-bs-dismiss="modal">Turn Off</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertAlarm