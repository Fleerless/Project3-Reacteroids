import React from "react";

function SubmitButton(props){
    return(
        <div className="form-group ">
        <div className="col-7"></div>
        <button
            {...props}
        >{props.text}</button>
        </div>
    )
}

export default SubmitButton;