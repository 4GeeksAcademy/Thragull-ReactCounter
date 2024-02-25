import React from "react";

import secundero from "../../img/secundero.png";
import horaria from "../../img/Horaria.png";
import minutero from "../../img/Minutero.png";
import reloj from "../../img/reloj.png";

const Watch = () => {
    return (
        <div id="watchContainer" className="position-relative mx-auto my-3">
            <img src={reloj} id="watch" className="z-n1 position-absolute top-50 start-50 translate-middle"/>
            <img src={horaria} id="hour" className="z-2 position-absolute"/>
            <img src={minutero} id="minute" className="z-1 position-absolute"/>
            <img src={secundero} id="second" className="z-0 position-absolute"/>
            <img src={secundero} id="month" className="z-0 position-absolute"/>
            <img src={secundero} id="day" className="z-0 position-absolute"/>

        </div>
    )
}

export default Watch