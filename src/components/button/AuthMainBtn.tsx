import React from "react";


export default function AuthMainBtn(
    {
    text, 
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