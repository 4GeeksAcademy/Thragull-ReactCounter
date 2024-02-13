import React from "react";
import Digit from "./Digit";

const Counter = (props) => {
    return (
        <div className="d-flex container-fluid bg-black justify-content-center my-5">
            <Digit digit ={props.digits.length >= 8? props.digits[props.digits.length-8]: 0}/>
            <Digit digit ={props.digits.length >= 7? props.digits[props.digits.length-7]: 0}/>
            <Digit digit ={props.digits.length >= 6? props.digits[props.digits.length-6]: 0}/>
            <Digit digit ={props.digits.length >= 5? props.digits[props.digits.length-5]: 0}/>
            <Digit digit ={props.digits.length >= 4? props.digits[props.digits.length-4]: 0}/>
            <Digit digit ={props.digits.length >= 3? props.digits[props.digits.length-3]: 0}/>
            <Digit digit ={props.digits.length >= 2? props.digits[props.digits.length-2]: 0}/>
            <Digit digit ={props.digits.length >= 1? props.digits[props.digits.length-1]: 0}/>
            {console.log(props.digits)}
        </div>
    )
}

export default Counter
