import React from "react";
import "./Button.module.css";

const Button = ({ onclick, children, type = "button", className = "" }) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onclick}>
            {children}
        </button>
    );
};

export default Button;