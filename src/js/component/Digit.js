import React from "react";

// The following array is a translator table to visualize the numbers as a digital digit. Each section of the digits is built in CSS. This table just stablish 
// wich parts will be shown and wich ones won't. Each index corresponds to its natural digit. Index 10 corresponds to the ":"
const digitTranslator = [{top:"", topLeft:"", topRight:"", center:"visually-hidden", bottomLeft:"", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"visually-hidden", topLeft:"visually-hidden", topRight:"", center:"visually-hidden", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"", bottomLeft:"", bottomRight:"visually-hidden", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"visually-hidden", topLeft:"", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"visually-hidden", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"visually-hidden", center:"", bottomLeft:"", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"visually-hidden", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"", center:"", bottomLeft:"", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:"", dotTop:"visually-hidden", dotBottom:"visually-hidden"},
                        {top:"visually-hidden", topLeft:"visually-hidden", topRight:"visually-hidden", center:"visually-hidden", bottomLeft:"visually-hidden", bottomRight:"visually-hidden", bottom:"visually-hidden", dotTop:"", dotBottom:""}]

const Digit = (props) => {
    return(
        <div id="digit" className="bg-black bg-gradient rounded-4 mx-1 position-relative">
            <div id="top" className={`position-absolute rounded-5 ${digitTranslator[props.digit].top}`}></div>
            <div id="topLeft" className={`position-absolute rounded-5 ${digitTranslator[props.digit].topLeft}`}></div>
            <div id="topRight" className={`position-absolute rounded-5 ${digitTranslator[props.digit].topRight}`}></div>
            <div id="dotTop" className={`position-absolute rounded-circle ${digitTranslator[props.digit].dotTop}`}></div>
            <div id="center" className={`position-absolute rounded-5 ${digitTranslator[props.digit].center}`}></div>
            <div id="dotBottom" className={`position-absolute rounded-circle ${digitTranslator[props.digit].dotBottom}`}></div>
            <div id="bottomLeft" className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottomLeft}`}></div>
            <div id="bottomRight" className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottomRight}`}></div>
            <div id="bottom"className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottom}`}></div>
        </div>
    )
}

export default Digit