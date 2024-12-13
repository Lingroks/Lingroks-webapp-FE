import React from "react";


export default function AuthMainBtn(
    {
    text = 'string', 
    className = '',
}) {
    return(
        <button
        className={`${className} rounded-[60px]`}>
            {text}
        </button>
    )
}