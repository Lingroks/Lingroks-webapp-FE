import React from "react";


export default function AuthMainBtn(
    {
    text = 'string', 
    type = 'button',
    className = '',
}) {
    return(
        <button
        type={type}
        className={`${className} rounded-[60px]`}>
            {text}
        </button>
    )
}