import React from "react";

function Input (props){
    return (
    <div className="form-group">
        <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="username">{props.label}</label>
        </div>
        <div className="col-3 col-mr-auto">
            <input className="form-input"
                {...props}
        />
        </div>
    </div>
    )
}

export default Input;
