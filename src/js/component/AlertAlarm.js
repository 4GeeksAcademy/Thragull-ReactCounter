import React from "react";

const AlertAlarm = () => {
    return(
        <div id="alarmAlert" className="modal fade" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-heyboard="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Alarm Clock</h5>
                    <button id="alarmOff" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Hey you!! It's time to Wake Up!!!</p>
                </div>
                <div className="modal-footer">
                    <button id="alarmSwitchOff" type="button" className="btn btn-danger" data-bs-dismiss="modal">Turn Off</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AlertAlarm