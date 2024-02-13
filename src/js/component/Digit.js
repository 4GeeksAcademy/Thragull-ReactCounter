import React from "react";
const digitTranslator = [{top:"", topLeft:"", topRight:"", center:"visually-hidden", bottomLeft:"", bottomRight:"", bottom:""},
                        {top:"visually-hidden", topLeft:"visually-hidden", topRight:"", center:"visually-hidden", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden"},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"", bottomLeft:"", bottomRight:"visually-hidden", bottom:""},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:""},
                        {top:"visually-hidden", topLeft:"", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"visually-hidden", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:""},
                        {top:"", topLeft:"", topRight:"visually-hidden", center:"", bottomLeft:"", bottomRight:"", bottom:""},
                        {top:"", topLeft:"visually-hidden", topRight:"", center:"visually-hidden", bottomLeft:"visually-hidden", bottomRight:"", bottom:"visually-hidden"},
                        {top:"", topLeft:"", topRight:"", center:"", bottomLeft:"", bottomRight:"", bottom:""},
                        {top:"", topLeft:"", topRight:"", center:"", bottomLeft:"visually-hidden", bottomRight:"", bottom:""},]

const Digit = (props) => {
    return(
        <div id="digit" className="bg-black bg-gradient rounded-4 mx-1 position-relative">
            <div id="top" className={`position-absolute rounded-5 ${digitTranslator[props.digit].top}`}></div>
            <div id="topLeft" className={`position-absolute rounded-5 ${digitTranslator[props.digit].topLeft}`}></div>
            <div id="topRight" className={`position-absolute rounded-5 ${digitTranslator[props.digit].topRight}`}></div>
            <div id="center" className={`position-absolute rounded-5 ${digitTranslator[props.digit].center}`}></div>
            <div id="bottomLeft" className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottomLeft}`}></div>
            <div id="bottomRight" className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottomRight}`}></div>
            <div id="bottom"className={`position-absolute rounded-5 ${digitTranslator[props.digit].bottom}`}></div>
        </div>
    )
}

export default Digit